<script lang="ts">
  export let as: "section" | "article" | "div" = "section";
  export let interactive = false;
  export let className = "";

  $: baseClass = `rounded-component-lg bg-background-surface p-component-lg shadow-surface ${interactive ? "transition-shadow duration-normal ease-standard hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus" : ""} ${className}`;
</script>

{#if as === "article"}
  <article class={baseClass}>
    <slot />
  </article>
{:else if as === "div"}
  <div class={baseClass}>
    <slot />
  </div>
{:else}
  <section class={baseClass}>
    <slot />
  </section>
{/if}
