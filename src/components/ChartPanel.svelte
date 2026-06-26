<script lang="ts">
  import Chart from "chart.js/auto";
  import { onDestroy, onMount } from "svelte";

  export type ChartPanelType = "line" | "bar" | "doughnut";
  export type ChartPanelTone = "income" | "expense" | "savings" | "debt" | "warning" | "success" | "brand";

  export interface ChartPanelSeries {
    label: string;
    values: number[];
    tone: ChartPanelTone;
  }

  export let title = "";
  export let summary = "";
  export let labels: string[] = [];
  export let series: ChartPanelSeries[] = [];
  export let type: ChartPanelType = "line";
  export let className = "";

  let canvas: HTMLCanvasElement;
  let chart: Chart | undefined;
  let mounted = false;

  const toneVariables: Record<ChartPanelTone, string> = {
    income: "--color-financial-income",
    expense: "--color-financial-expense",
    savings: "--color-financial-savings",
    debt: "--color-financial-debt",
    warning: "--color-warning-default",
    success: "--color-success-default",
    brand: "--color-brand-default"
  };

  function tokenValue(name: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function buildChart() {
    if (!canvas) return;
    chart?.destroy();

    const textColor = tokenValue("--color-text-default");
    const mutedColor = tokenValue("--color-text-muted");
    const borderColor = tokenValue("--color-border-default");

    chart = new Chart(canvas, {
      type,
      data: {
        labels,
        datasets: series.map((item) => {
          const color = tokenValue(toneVariables[item.tone]);
          return {
            label: item.label,
            data: item.values,
            borderColor: color,
            backgroundColor: color,
            pointBackgroundColor: color,
            pointBorderColor: color,
            tension: type === "line" ? 0.32 : undefined
          };
        })
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: textColor,
              boxWidth: 12
            }
          }
        },
        scales: type === "doughnut" ? undefined : {
          x: {
            grid: {
              color: borderColor
            },
            ticks: {
              color: mutedColor
            }
          },
          y: {
            grid: {
              color: borderColor
            },
            ticks: {
              color: mutedColor
            }
          }
        }
      }
    });
  }

  onMount(() => {
    mounted = true;
    buildChart();
  });

  $: if (mounted) {
    type;
    labels;
    series;
    buildChart();
  }

  onDestroy(() => {
    chart?.destroy();
  });
</script>

<section class={`grid gap-component-md rounded-component-lg border border-border-default bg-background-surface p-component-lg shadow-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${className}`}>
  <div class="grid gap-component-xs">
    {#if title}
      <h3 class="text-lg font-semibold text-text-default">{title}</h3>
    {/if}
    {#if summary}
      <p class="text-sm text-text-muted">{summary}</p>
    {/if}
  </div>

  <canvas bind:this={canvas} aria-label={summary || title}>
    {summary || title}
  </canvas>
</section>
