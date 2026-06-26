<script lang="ts">
  export let tone: "info" | "success" | "warning" | "danger" = "info";
  export let title = "";
  export let message = "";
  export let className = "";

  $: toneClass = {
    info: "bg-info-subtle text-text-default",
    success: "bg-success-subtle text-text-success",
    warning: "bg-warning-subtle text-text-warning",
    danger: "bg-danger-subtle text-text-danger"
  }[tone];
</script>

<div class={`rounded-component-md p-component-lg shadow-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${toneClass} ${className}`} role={tone === "danger" ? "alert" : "status"}>
  {#if title}
    <p class="font-semibold">{title}</p>
  {/if}
  {#if message}
    <p class="text-sm">{message}</p>
  {/if}
  <slot />
</div>
