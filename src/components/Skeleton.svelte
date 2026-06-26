<script lang="ts">
  export let variant: "text" | "card" | "row" = "text";
  export let label = "Carregando";
  export let className = "";

  $: variantClass = {
    text: "h-component-md w-full rounded-component-sm",
    card: "h-32 w-full rounded-component-lg",
    row: "h-16 w-full rounded-component-md"
  }[variant];
</script>

<div
  class={`animate-pulse bg-background-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${variantClass} ${className}`}
  role="status"
  aria-label={label}
>
  <span class="sr-only">{label}</span>
</div>
