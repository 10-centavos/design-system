<script lang="ts">
  import Badge from "./Badge.svelte";
  import MoneyValue from "./MoneyValue.svelte";
  import Progress from "./Progress.svelte";

  export let name = "";
  export let allocated = 0;
  export let spent = 0;
  export let status: "funded" | "partial" | "empty" | "overspent" = "empty";
  export let className = "";

  $: remaining = allocated - spent;
  $: progressValue = allocated > 0 ? Math.min((spent / allocated) * 100, 100) : 0;
  $: badgeTone = status === "overspent" ? "danger" : status === "funded" ? "success" : status === "partial" ? "warning" : "neutral";
</script>

<article class={`grid gap-component-md rounded-component-md bg-background-surface p-component-lg shadow-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${className}`}>
  <div class="flex items-start justify-between gap-component-md">
    <div>
      <p class="font-medium text-text-default">{name}</p>
      <p class="text-sm text-text-muted">Restante</p>
    </div>
    <Badge tone={badgeTone}>{status}</Badge>
  </div>
  <Progress value={progressValue} state={status} label={`Progresso do orçamento ${name}`} />
  <div class="grid grid-cols-3 gap-component-md text-sm">
    <div>
      <p class="text-text-muted">Alocado</p>
      <MoneyValue amount={allocated} tone="neutral" />
    </div>
    <div>
      <p class="text-text-muted">Gasto</p>
      <MoneyValue amount={-Math.abs(spent)} tone="negative" />
    </div>
    <div>
      <p class="text-text-muted">Saldo</p>
      <MoneyValue amount={remaining} />
    </div>
  </div>
</article>
