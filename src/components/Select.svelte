<script lang="ts">
  export interface SelectOption {
    label: string;
    value: string;
  }

  export let id = "";
  export let name = "";
  export let value = "";
  export let label = "";
  export let error = "";
  export let disabled = false;
  export let options: SelectOption[] = [];
  export let className = "";

  $: fieldId = id || name;
  $: describedBy = error ? `${fieldId}-error` : undefined;
</script>

<label class={`grid gap-component-xs text-label text-text-default ${className}`} for={fieldId}>
  {#if label}
    <span>{label}</span>
  {/if}
  <select
    class="w-full rounded-component-md border border-border-default bg-background-surface px-component-md py-component-sm text-text-default transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus disabled:cursor-not-allowed disabled:opacity-60 aria-invalid:border-border-danger"
    {id}
    {name}
    {disabled}
    bind:value
    aria-invalid={error ? "true" : undefined}
    aria-describedby={describedBy}
  >
    <slot>
      {#each options as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </slot>
  </select>
  {#if error}
    <span id={`${fieldId}-error`} class="text-sm text-text-danger">{error}</span>
  {/if}
</label>
