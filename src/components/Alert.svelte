<script lang="ts">
  export let tone: "info" | "success" | "warning" | "danger" = "info";
  export let title = "";
  export let message = "";
  export let className = "";

  $: toneClass = {
    info: "border-info-default bg-info-subtle text-text-default",
    success: "border-success-default bg-success-subtle text-text-success",
    warning: "border-warning-default bg-warning-subtle text-text-warning",
    danger: "border-danger-default bg-danger-subtle text-text-danger"
  }[tone];
</script>

<div class={`rounded-component-md border p-component-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus ${toneClass} ${className}`} role={tone === "danger" ? "alert" : "status"}>
  {#if title}
    <p class="font-semibold">{title}</p>
  {/if}
  {#if message}
    <p class="text-sm">{message}</p>
  {/if}
  <slot />
</div>
