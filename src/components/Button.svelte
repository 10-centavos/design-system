<script lang="ts">
  export let variant: "primary" | "secondary" | "ghost" | "danger" = "primary";
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled = false;
  export let loading = false;
  export let label = "";
  export let className = "";

  $: variantClass = {
    primary: "bg-brand-default text-brand-contrast hover:bg-brand-hover",
    secondary: "border border-border-default bg-background-surface text-text-default hover:bg-background-muted",
    ghost: "bg-background-surface text-text-default hover:bg-background-muted",
    danger: "bg-danger-default text-danger-contrast hover:bg-danger-hover"
  }[variant];
</script>

<button
  class={`inline-flex items-center justify-center gap-component-sm rounded-component-md px-component-lg py-component-sm font-medium transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:cursor-not-allowed disabled:opacity-60 ${variantClass} ${className}`}
  {type}
  disabled={disabled || loading}
  aria-busy={loading}
>
  {#if loading}
    <span aria-hidden="true" class="size-component-md rounded-full border border-brand-contrast"></span>
  {/if}
  <span><slot>{label}</slot></span>
</button>
