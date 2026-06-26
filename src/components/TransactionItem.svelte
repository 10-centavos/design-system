<script lang="ts">
  import Badge from "./Badge.svelte";
  import MoneyValue from "./MoneyValue.svelte";

  export let title = "";
  export let category = "";
  export let date = "";
  export let amount = 0;
  export let type: "income" | "expense" = "expense";
  export let className = "";

  $: signedAmount = type === "expense" ? -Math.abs(amount) : Math.abs(amount);
</script>

<article class={`flex items-center justify-between gap-component-md py-component-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${className}`}>
  <div class="min-w-0">
    <p class="truncate font-medium text-text-default">{title}</p>
    <div class="mt-component-xs flex items-center gap-component-sm text-sm text-text-muted">
      <Badge tone={type}>{category}</Badge>
      <span>{date}</span>
    </div>
  </div>
  <MoneyValue amount={signedAmount} tone={type === "income" ? "positive" : "negative"} />
</article>
