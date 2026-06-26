<script lang="ts">
  import { onMount } from "svelte";

  export let variant: "wave" | "pulse" | "spark" = "wave";
  export let columns = 28;
  export let rows = 14;
  export let speed = 1;
  export let decorative = true;
  export let label = "Animacao pixel";
  export let className = "";

  let viewport: HTMLDivElement | null = null;
  let canvas: HTMLCanvasElement | null = null;
  let context: CanvasRenderingContext2D | null = null;
  let raf = 0;
  let resizeObserver: ResizeObserver | null = null;
  let themeObserver: MutationObserver | null = null;
  let reducedMotion = false;

  const toneVars = [
    "--color-brand-default",
    "--color-info-default",
    "--color-success-default",
    "--color-warning-default",
    "--color-danger-default",
    "--color-financial-savings"
  ];

  let palette: string[] = [];
  let surface = "#ffffff";
  let muted = "#f1f5f9";

  function readVar(name: string) {
    if (typeof document === "undefined") return "";
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function hexToRgba(color: string, alpha: number) {
    if (!color) return `rgba(0, 0, 0, ${alpha})`;
    if (color.startsWith("rgb")) return color;

    const hex = color.replace("#", "");
    const value =
      hex.length === 3
        ? hex
            .split("")
            .map((part) => `${part}${part}`)
            .join("")
        : hex;

    const numeric = Number.parseInt(value, 16);
    const red = (numeric >> 16) & 255;
    const green = (numeric >> 8) & 255;
    const blue = numeric & 255;

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function syncThemeTokens() {
    palette = toneVars.map((name) => readVar(name)).filter(Boolean);
    surface = readVar("--color-background-surface") || surface;
    muted = readVar("--color-background-muted") || muted;
  }

  function resize() {
    if (!viewport || !canvas) return;

    const width = Math.max(1, viewport.clientWidth);
    const height = Math.max(1, viewport.clientHeight);
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);

    context?.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(performance.now());
  }

  function hashCell(x: number, y: number, frame: number) {
    const seed = x * 374761393 + y * 668265263 + frame * 2147483647;
    const value = (seed ^ (seed >> 13)) * 1274126177;
    return ((value ^ (value >> 16)) >>> 0) / 4294967295;
  }

  function draw(time: number) {
    if (!context || !viewport || !canvas) return;

    const width = viewport.clientWidth;
    const height = viewport.clientHeight;
    const cellWidth = width / columns;
    const cellHeight = height / rows;
    const frame = Math.floor((time * 0.001 * speed) * 12);

    context.clearRect(0, 0, width, height);
    context.fillStyle = surface;
    context.fillRect(0, 0, width, height);

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < columns; col += 1) {
        const x = Math.floor(col * cellWidth);
        const y = Math.floor(row * cellHeight);
        const pixelWidth = Math.ceil(cellWidth);
        const pixelHeight = Math.ceil(cellHeight);
        const wave = Math.sin(col * 0.55 + time * 0.0024 * speed) + Math.cos(row * 0.45 - time * 0.0018 * speed);
        const radial = 1 - Math.min(1, Math.hypot(col - columns / 2, row - rows / 2) / Math.max(columns, rows));
        const sparkle = hashCell(col, row, frame);

        let active = false;
        let color = palette[(col + row + frame) % Math.max(palette.length, 1)] || muted;

        if (variant === "wave") {
          active = wave > 0.35;
          color = palette[(col + row) % Math.max(palette.length, 1)] || color;
        } else if (variant === "pulse") {
          active = radial > 0.45 && wave > -0.25;
          color = palette[(row + frame) % Math.max(palette.length, 1)] || color;
        } else {
          active = sparkle > 0.82;
          color = palette[(col + row + frame) % Math.max(palette.length, 1)] || color;
        }

        context.fillStyle = hexToRgba(muted, 0.24);
        context.fillRect(x, y, pixelWidth - 1, pixelHeight - 1);

        if (!active) continue;

        context.shadowBlur = 18;
        context.shadowColor = hexToRgba(color, 0.65);
        context.fillStyle = hexToRgba(color, variant === "spark" ? 0.9 : 0.82);
        context.fillRect(x + 1, y + 1, pixelWidth - 3, pixelHeight - 3);
      }
    }

    context.shadowBlur = 0;
  }

  onMount(() => {
    if (!viewport || !canvas) return;

    context = canvas.getContext("2d");
    if (!context) return;

    context.imageSmoothingEnabled = false;
    reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    syncThemeTokens();
    resize();

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotion = () => {
      reducedMotion = mediaQuery.matches;
      if (reducedMotion) {
        draw(performance.now());
        cancelAnimationFrame(raf);
        return;
      }
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(animate);
    };

    const animate = (time: number) => {
      draw(time);
      if (!reducedMotion) {
        raf = requestAnimationFrame(animate);
      }
    };

    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(viewport);

    themeObserver = new MutationObserver(() => {
      syncThemeTokens();
      draw(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"]
    });

    mediaQuery.addEventListener("change", handleMotion);
    if (!reducedMotion) {
      raf = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver?.disconnect();
      themeObserver?.disconnect();
      mediaQuery.removeEventListener("change", handleMotion);
    };
  });
</script>

<div
  bind:this={viewport}
  class={`relative overflow-hidden rounded-component-lg border border-border-default bg-background-surface ${className}`}
  aria-hidden={decorative}
  aria-label={decorative ? undefined : label}
  role={decorative ? "presentation" : "img"}
>
  <canvas bind:this={canvas} class="block h-full w-full"></canvas>
</div>
