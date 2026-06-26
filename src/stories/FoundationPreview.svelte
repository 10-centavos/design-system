<script lang="ts">
  import { CircleDollarSign, Layers, Palette, Ruler, Type } from "@lucide/svelte";

  const colorGroups = [
    {
      title: "Brand",
      items: [
        { label: "Default", className: "bg-brand-default text-brand-contrast" },
        { label: "Hover", className: "bg-brand-hover text-brand-contrast" },
        { label: "Subtle", className: "bg-brand-subtle text-brand-default" }
      ]
    },
    {
      title: "Feedback",
      items: [
        { label: "Success", className: "bg-success-subtle text-text-success" },
        { label: "Warning", className: "bg-warning-subtle text-text-warning" },
        { label: "Danger", className: "bg-danger-subtle text-text-danger" },
        { label: "Info", className: "bg-info-subtle text-info-default" }
      ]
    },
    {
      title: "Financial",
      items: [
        { label: "Income", className: "bg-financial-income-subtle text-financial-income" },
        { label: "Expense", className: "bg-financial-expense-subtle text-financial-expense" },
        { label: "Savings", className: "bg-financial-savings-subtle text-financial-savings" },
        { label: "Debt", className: "bg-financial-debt-subtle text-financial-debt" }
      ]
    }
  ];

  const spacing = [
    { label: "xs", className: "w-component-xs" },
    { label: "sm", className: "w-component-sm" },
    { label: "md", className: "w-component-md" },
    { label: "lg", className: "w-component-lg" },
    { label: "xl", className: "w-component-xl" }
  ];

  const surfaces = [
    { label: "Surface", className: "rounded-component-lg border border-border-default bg-background-surface shadow-surface" },
    { label: "Muted", className: "rounded-component-lg border border-border-default bg-background-muted shadow-none" },
    { label: "Brand", className: "rounded-component-lg border border-brand-default bg-brand-subtle shadow-none" }
  ];
</script>

<section class="grid gap-layout-lg bg-background-canvas p-layout-md text-text-default">
  <header class="grid gap-component-sm border-b border-border-default pb-layout-md">
    <div class="flex items-center gap-component-sm text-brand-default">
      <Layers aria-hidden="true" class="size-component-lg" />
      <span class="text-sm font-semibold">Foundation</span>
    </div>
    <h1 class="text-3xl font-semibold">Base do design system</h1>
    <p class="text-sm text-text-muted">Tokens semânticos para telas financeiras e interfaces assistidas por agente.</p>
  </header>

  <section class="grid gap-component-md">
    <div class="flex items-center gap-component-sm">
      <Palette aria-hidden="true" class="size-component-md text-brand-default" />
      <h2 class="text-xl font-semibold">Cores</h2>
    </div>

    <div class="grid gap-component-md lg:grid-cols-3">
      {#each colorGroups as group}
        <article class="grid gap-component-md rounded-component-lg border border-border-default bg-background-surface p-component-lg shadow-surface">
          <h3 class="text-lg font-semibold">{group.title}</h3>
          <div class="grid gap-component-sm">
            {#each group.items as item}
              <div class={`rounded-component-md px-component-md py-component-sm text-sm font-medium ${item.className}`}>{item.label}</div>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="grid gap-component-md">
    <div class="flex items-center gap-component-sm">
      <Type aria-hidden="true" class="size-component-md text-brand-default" />
      <h2 class="text-xl font-semibold">Tipografia</h2>
    </div>

    <article class="grid gap-component-md rounded-component-lg border border-border-default bg-background-surface p-component-lg shadow-surface">
      <div class="grid gap-component-xs">
        <p class="text-3xl font-semibold">Heading 1</p>
        <p class="text-2xl font-semibold">Heading 2</p>
        <p class="text-xl font-semibold">Heading 3</p>
      </div>
      <p class="text-base text-text-default">Texto base para leitura de contexto, descricoes e respostas do agente.</p>
      <p class="font-numeric tabular-nums text-right font-semibold text-financial-income">+R$ 5.400,00</p>
    </article>
  </section>

  <section class="grid gap-component-md">
    <div class="flex items-center gap-component-sm">
      <Ruler aria-hidden="true" class="size-component-md text-brand-default" />
      <h2 class="text-xl font-semibold">Espacamento e superficies</h2>
    </div>

    <div class="grid gap-component-md lg:grid-cols-2">
      <article class="grid gap-component-md rounded-component-lg border border-border-default bg-background-surface p-component-lg shadow-surface">
        <h3 class="text-lg font-semibold">Spacing</h3>
        <div class="grid gap-component-sm">
          {#each spacing as item}
            <div class="flex items-center gap-component-md text-sm">
              <span class="w-component-xl text-text-muted">{item.label}</span>
              <span class={`block h-component-sm rounded-component-full bg-brand-default ${item.className}`}></span>
            </div>
          {/each}
        </div>
      </article>

      <article class="grid gap-component-md">
        {#each surfaces as item}
          <div class={`p-component-lg ${item.className}`}>
            <div class="flex items-center gap-component-sm">
              <CircleDollarSign aria-hidden="true" class="size-component-md text-brand-default" />
              <span class="text-sm font-medium">{item.label}</span>
            </div>
          </div>
        {/each}
      </article>
    </div>
  </section>
</section>
