<script lang="ts">
  export let value = 0;
  export let max = 100;
  export let label = "Progresso";
  export let state: "funded" | "partial" | "empty" | "overspent" | "complete" | "progress" = "progress";
  export let className = "";

  $: normalizedValue = Math.min(Math.max(value, 0), max);
  $: stateClass = {
    funded: "accent-financial-funded",
    partial: "accent-financial-partial",
    empty: "accent-financial-empty",
    overspent: "accent-financial-overspent",
    complete: "accent-financial-goal-complete",
    progress: "accent-financial-goal-progress"
  }[state];
</script>

<progress
  class={`h-component-sm w-full rounded-component-full bg-background-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${stateClass} ${className}`}
  value={normalizedValue}
  {max}
  aria-label={label}
></progress>
