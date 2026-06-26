<script lang="ts">
  export let id = "";
  export let name = "";
  export let type: "text" | "search" | "number" = "text";
  export let value: string | number = "";
  export let placeholder = "";
  export let label = "";
  export let error = "";
  export let disabled = false;
  export let inputMode: "text" | "search" | "decimal" | "numeric" = "text";
  export let className = "";

  $: fieldId = id || name;
  $: describedBy = error ? `${fieldId}-error` : undefined;
</script>

<label class={`grid gap-component-xs text-label text-text-default ${className}`} for={fieldId}>
  {#if label}
    <span>{label}</span>
  {/if}
  <input
    class="w-full rounded-component-md bg-background-surface px-component-md py-component-sm text-text-default shadow-surface placeholder:text-text-muted transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:ring-2 aria-invalid:ring-border-danger"
    {id}
    {name}
    {type}
    {placeholder}
    {disabled}
    {inputMode}
    bind:value
    aria-invalid={error ? "true" : undefined}
    aria-describedby={describedBy}
  />
  {#if error}
    <span id={`${fieldId}-error`} class="text-sm text-text-danger">{error}</span>
  {/if}
</label>
