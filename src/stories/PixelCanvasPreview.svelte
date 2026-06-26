<script lang="ts">
  import PixelCanvas from "../components/PixelCanvas.svelte";

  const variants = [
    { title: "Wave", variant: "wave" as const, note: "Sweep horizontal para hero e faixas" },
    { title: "Pulse", variant: "pulse" as const, note: "Pulso central para modais e chamadas" },
    { title: "Spark", variant: "spark" as const, note: "Fagulhas neon para estados de evento" }
  ];
</script>

<section class="grid gap-layout-lg bg-background-canvas p-layout-md text-text-default">
  <header class="grid gap-component-sm">
    <p class="text-sm font-semibold uppercase text-brand-default">Atomic canvas</p>
    <h1 class="text-3xl font-semibold">Pixel animations para fundos e modais</h1>
  </header>

  <div class="grid gap-component-md lg:grid-cols-3">
    {#each variants as item}
      <div class="grid gap-component-sm">
        <PixelCanvas variant={item.variant} className="h-layout-xl" />
        <div class="grid gap-component-xs">
          <h2 class="text-lg font-semibold">{item.title}</h2>
          <p class="text-sm text-text-muted">{item.note}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
