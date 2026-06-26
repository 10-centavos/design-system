<script lang="ts">
  import { X } from "@lucide/svelte";
  import { createEventDispatcher } from "svelte";

  export let open = false;
  export let title = "";
  export let description = "";
  export let size: "sm" | "md" | "lg" = "md";
  export let dismissible = true;
  export let className = "";

  const dispatch = createEventDispatcher<{ close: void }>();
  const instanceId = Math.random().toString(36).slice(2);

  $: titleId = title ? `modal-title-${instanceId}` : undefined;
  $: descriptionId = description ? `modal-description-${instanceId}` : undefined;
  $: sizeClass = {
    sm: "sm:max-w-md",
    md: "sm:max-w-lg",
    lg: "sm:max-w-2xl"
  }[size];

  function close() {
    if (!dismissible) return;
    dispatch("close");
  }

  function handleKeydown(event: KeyboardEvent) {
    if (open && event.key === "Escape") close();
  }

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) close();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
  <dialog
    open
    class="fixed inset-0 z-50 m-0 h-full w-full max-w-none bg-background-canvas/82 p-layout-md backdrop-blur-md"
    aria-labelledby={titleId}
    aria-describedby={description ? descriptionId : undefined}
    onclick={handleBackdropClick}
  >
    <div class="flex min-h-full items-center justify-center">
      <section class={`grid w-full gap-component-lg rounded-component-lg border border-brand-default bg-background-surface p-component-lg shadow-elevated ${sizeClass} ${className}`}>
        <div class="h-1 w-full rounded-component-full bg-brand-default" aria-hidden="true"></div>
        <header class="flex items-start justify-between gap-component-md">
          <div class="grid gap-component-xs">
            {#if title}
              <h2 id={titleId} class="text-xl font-semibold text-text-default">{title}</h2>
            {/if}
            {#if description}
              <p id={descriptionId} class="text-sm text-text-muted">{description}</p>
            {/if}
          </div>

          {#if dismissible}
            <button
              type="button"
              class="inline-flex size-component-lg items-center justify-center rounded-component-sm border border-border-default bg-background-muted text-text-muted transition-colors duration-normal ease-standard hover:border-border-focus hover:bg-brand-subtle hover:text-brand-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus"
              aria-label="Fechar modal"
              onclick={close}
            >
              <X aria-hidden="true" class="size-component-md" />
            </button>
          {/if}
        </header>

        <div class="grid gap-component-md">
          <slot />
        </div>

        <footer class="flex flex-wrap items-center justify-end gap-component-sm border-t border-border-default pt-component-md">
          <slot name="footer" />
        </footer>
      </section>
    </div>
  </dialog>
{/if}
