<script lang="ts">
  import { Bot, Plus, Search } from "@lucide/svelte";
  import Icon from "../components/Icon.svelte";

  const lucideIcons = [
    { label: "Bot", icon: Bot, className: "text-brand-default" },
    { label: "Plus", icon: Plus, className: "text-success-default" },
    { label: "Search", icon: Search, className: "text-info-default" }
  ];

  const nerdIcons = [
    { label: "Abacus", set: "game-icons", name: "abacus", className: "text-brand-default" },
    { label: "Wizard", set: "game-icons", name: "wizard-staff", className: "text-warning-default" },
    { label: "Console", set: "game-icons", name: "game-console", className: "text-info-default" },
    { label: "Robot", set: "game-icons", name: "robot-helmet", className: "text-success-default" },
    { label: "Dice", set: "game-icons", name: "dice-twenty-faces-twenty", className: "text-danger-default" },
    { label: "Scroll", set: "game-icons", name: "scroll-unfurled", className: "text-text-muted" },
    { label: "Book", set: "game-icons", name: "book-aura", className: "text-financial-goal-progress" },
    { label: "Trophy", set: "game-icons", name: "trophy-cup", className: "text-financial-goal-complete" },
    { label: "Microchip", set: "game-icons", name: "microchip", className: "text-text-default" },
    { label: "Search", set: "mdi", name: "magnify", className: "text-text-muted" }
  ];
</script>

<section class="grid gap-layout-md bg-background-surface text-text-default">
  <div class="grid gap-component-sm">
    <h2 class="text-2xl font-semibold">Icones nerd</h2>
    <p class="text-sm text-text-muted">Lucide para ações rápidas; `game-icons` para linguagem de missão, progresso e loot; `mdi` como fallback funcional.</p>
  </div>

  <div class="grid gap-component-sm sm:grid-cols-3">
    {#each lucideIcons as item}
      <div class="flex items-center gap-component-sm rounded-component-md bg-background-muted px-component-md py-component-sm">
        <svelte:component this={item.icon} aria-hidden="true" class={`size-component-md ${item.className}`} />
        <span class="text-sm font-medium text-text-default">{item.label}</span>
      </div>
    {/each}
  </div>

  <div class="grid gap-component-sm sm:grid-cols-2 lg:grid-cols-5">
    {#each nerdIcons as item}
      <div class="flex items-center gap-component-sm rounded-component-md bg-background-muted px-component-md py-component-sm">
        <Icon set={item.set} name={item.name} className={`size-component-md ${item.className}`} />
        <span class="text-sm font-medium text-text-default">{item.label}</span>
      </div>
    {/each}
  </div>
</section>
