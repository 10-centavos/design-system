<script lang="ts">
  export let variant: "primary" | "secondary" | "ghost" | "danger" = "primary";
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled = false;
  export let loading = false;
  export let label = "";
  export let iconPosition: "left" | "right" = "left";
  export let iconOnly = false;
  export let ariaLabel = "";
  export let className = "";

  $: hasIcon = Boolean($$slots.icon);
  $: variantClass = {
    primary: "bg-brand-default text-brand-contrast hover:bg-brand-hover",
    secondary: "bg-background-muted text-text-default hover:bg-brand-subtle",
    ghost: "bg-background-surface text-text-default hover:bg-background-muted",
    danger: "bg-danger-default text-danger-contrast hover:bg-danger-hover"
  }[variant];

  $: sizeClass = iconOnly ? "size-12 p-0" : "px-component-lg py-component-sm";
</script>

<button
  class={`inline-flex shrink-0 items-center justify-center rounded-component-full font-semibold shadow-surface transition-colors duration-normal ease-standard active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:cursor-not-allowed disabled:opacity-60 ${iconOnly ? "gap-0" : "gap-component-sm whitespace-nowrap"} ${sizeClass} ${variantClass} ${className}`}
  {type}
  disabled={disabled || loading}
  aria-busy={loading}
  aria-label={iconOnly ? ariaLabel || label : undefined}
>
  {#if loading}
    <span aria-hidden="true" class="size-component-md rounded-full bg-brand-contrast/80"></span>
  {/if}
  {#if hasIcon && iconPosition === "left"}
    <span aria-hidden="true" class="inline-flex shrink-0 items-center justify-center">
      <slot name="icon" />
    </span>
  {/if}
  {#if !iconOnly}
    <span class="truncate"><slot>{label}</slot></span>
  {/if}
  {#if hasIcon && iconPosition === "right"}
    <span aria-hidden="true" class="inline-flex shrink-0 items-center justify-center">
      <slot name="icon" />
    </span>
  {/if}
  {#if iconOnly && !hasIcon}
    <span class="sr-only">{ariaLabel || label}</span>
  {/if}
</button>
