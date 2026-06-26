<script lang="ts">
  import {
    AlertTriangle,
    ArrowDownCircle,
    ArrowUpCircle,
    Banknote,
    CheckCircle2,
    PiggyBank,
    Plus,
    Search,
    ShieldAlert,
    Target
  } from "@lucide/svelte";

  const icons = [
    { label: "Income", icon: ArrowUpCircle, className: "text-financial-income" },
    { label: "Expense", icon: ArrowDownCircle, className: "text-financial-expense" },
    { label: "Savings", icon: PiggyBank, className: "text-financial-savings" },
    { label: "Debt", icon: ShieldAlert, className: "text-financial-debt" },
    { label: "Goal", icon: Target, className: "text-financial-goal-progress" },
    { label: "Complete", icon: CheckCircle2, className: "text-financial-goal-complete" },
    { label: "Warning", icon: AlertTriangle, className: "text-text-warning" },
    { label: "Money", icon: Banknote, className: "text-text-default" },
    { label: "Add", icon: Plus, className: "text-brand-default" },
    { label: "Search", icon: Search, className: "text-text-muted" }
  ];
</script>

<section class="grid gap-layout-md bg-background-surface text-text-default">
  <div class="grid gap-component-sm">
    <h2 class="text-2xl font-semibold">Icones</h2>
    <p class="text-sm text-text-muted">Lucide aplicado como marcador funcional, sem depender apenas de cor.</p>
  </div>

  <div class="grid gap-component-xs border-y border-border-default py-component-md sm:grid-cols-2 lg:grid-cols-5">
    {#each icons as item}
      <div class="flex items-center gap-component-sm rounded-component-md px-component-sm py-component-xs">
        <svelte:component this={item.icon} aria-hidden="true" class={`size-component-md ${item.className}`} />
        <span class="text-sm font-medium text-text-default">{item.label}</span>
      </div>
    {/each}
  </div>
</section>
