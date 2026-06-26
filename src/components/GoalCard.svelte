<script lang="ts">
  import Badge from "./Badge.svelte";
  import MoneyValue from "./MoneyValue.svelte";
  import Progress from "./Progress.svelte";

  export let title = "";
  export let current = 0;
  export let target = 0;
  export let className = "";

  $: percent = target > 0 ? Math.min((current / target) * 100, 100) : 0;
  $: completed = percent >= 100;
</script>

<article class={`grid gap-component-md rounded-component-lg bg-background-surface p-component-lg shadow-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${className}`}>
  <div class="flex items-start justify-between gap-component-md">
    <div>
      <h3 class="text-lg font-semibold text-text-default">{title}</h3>
      <p class="text-sm text-text-muted">{Math.round(percent)}% concluido</p>
    </div>
    <Badge tone={completed ? "success" : "neutral"}>{completed ? "completed" : "in progress"}</Badge>
  </div>
  <Progress value={percent} state={completed ? "complete" : "progress"} label={`Progresso da meta ${title}`} />
  <div class="flex items-center justify-between gap-component-md text-sm">
    <MoneyValue amount={current} tone="positive" />
    <MoneyValue amount={target} tone="neutral" />
  </div>
</article>
