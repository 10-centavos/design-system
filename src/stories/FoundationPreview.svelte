<script lang="ts">
  import Icon from "../components/Icon.svelte";

  const primitiveColors = [
    {
      title: "Brand / Neon",
      items: [
        { label: "50", className: "bg-brand-50 text-brand-700" },
        { label: "100", className: "bg-brand-100 text-brand-700" },
        { label: "500", className: "bg-brand-500 text-brand-contrast" },
        { label: "600", className: "bg-brand-600 text-brand-contrast" },
        { label: "700", className: "bg-brand-700 text-brand-contrast" }
      ]
    },
    {
      title: "Success / Vital",
      items: [
        { label: "50", className: "bg-success-50 text-success-700" },
        { label: "100", className: "bg-success-100 text-success-700" },
        { label: "500", className: "bg-success-500 text-success-contrast" },
        { label: "600", className: "bg-success-600 text-success-contrast" },
        { label: "700", className: "bg-success-700 text-success-contrast" }
      ]
    },
    {
      title: "Warning / Magenta",
      items: [
        { label: "50", className: "bg-warning-50 text-warning-700" },
        { label: "100", className: "bg-warning-100 text-warning-700" },
        { label: "500", className: "bg-warning-500 text-warning-contrast" },
        { label: "600", className: "bg-warning-600 text-warning-contrast" },
        { label: "700", className: "bg-warning-700 text-warning-contrast" }
      ]
    },
    {
      title: "Danger / Alert",
      items: [
        { label: "50", className: "bg-danger-50 text-danger-700" },
        { label: "100", className: "bg-danger-100 text-danger-700" },
        { label: "500", className: "bg-danger-500 text-danger-contrast" },
        { label: "600", className: "bg-danger-600 text-danger-contrast" },
        { label: "700", className: "bg-danger-700 text-danger-contrast" }
      ]
    },
    {
      title: "Info / Cyan",
      items: [
        { label: "50", className: "bg-info-50 text-info-700" },
        { label: "100", className: "bg-info-100 text-info-700" },
        { label: "500", className: "bg-info-500 text-info-contrast" },
        { label: "600", className: "bg-info-600 text-info-contrast" },
        { label: "700", className: "bg-info-700 text-info-contrast" }
      ]
    },
    {
      title: "Savings / Electric",
      items: [
        { label: "50", className: "bg-savings-50 text-savings-700" },
        { label: "100", className: "bg-savings-100 text-savings-700" },
        { label: "500", className: "bg-savings-500 text-savings-contrast" },
        { label: "600", className: "bg-savings-600 text-savings-contrast" },
        { label: "700", className: "bg-savings-700 text-savings-contrast" }
      ]
    },
    {
      title: "Debt / Ember",
      items: [
        { label: "50", className: "bg-debt-50 text-debt-700" },
        { label: "100", className: "bg-debt-100 text-debt-700" },
        { label: "500", className: "bg-debt-500 text-debt-contrast" },
        { label: "600", className: "bg-debt-600 text-debt-contrast" },
        { label: "700", className: "bg-debt-700 text-debt-contrast" }
      ]
    },
    {
      title: "Neutral / Space",
      items: [
        { label: "0", className: "bg-neutral-0 text-neutral-950" },
        { label: "50", className: "bg-neutral-50 text-neutral-950" },
        { label: "100", className: "bg-neutral-100 text-neutral-950" },
        { label: "200", className: "bg-neutral-200 text-neutral-950" },
        { label: "300", className: "bg-neutral-300 text-neutral-950" },
        { label: "500", className: "bg-neutral-500 text-neutral-0" },
        { label: "700", className: "bg-neutral-700 text-neutral-0" },
        { label: "800", className: "bg-neutral-800 text-neutral-0" },
        { label: "900", className: "bg-neutral-900 text-neutral-0" },
        { label: "950", className: "bg-neutral-950 text-neutral-0" }
      ]
    }
  ];

  const semanticColors = [
    {
      title: "Background",
      items: [
        { label: "Canvas", className: "bg-background-canvas text-text-default" },
        { label: "Surface", className: "bg-background-surface text-text-default" },
        { label: "Muted", className: "bg-background-muted text-text-default" }
      ]
    },
    {
      title: "Text / Border",
      items: [
        { label: "Text default", className: "bg-background-surface text-text-default" },
        { label: "Text muted", className: "bg-background-surface text-text-muted" },
        { label: "Text inverse", className: "bg-text-default text-text-inverse" },
        { label: "Border default", className: "bg-background-surface text-border-default shadow-surface" },
        { label: "Border strong", className: "bg-background-surface text-border-strong shadow-surface" },
        { label: "Border focus", className: "bg-background-surface text-border-focus shadow-surface" }
      ]
    },
    {
      title: "Brand / Feedback",
      items: [
        { label: "Brand default", className: "bg-brand-default text-brand-contrast" },
        { label: "Brand hover", className: "bg-brand-hover text-brand-contrast" },
        { label: "Brand subtle", className: "bg-brand-subtle text-brand-default" },
        { label: "Success", className: "bg-success-default text-success-contrast" },
        { label: "Warning", className: "bg-warning-default text-warning-contrast" },
        { label: "Danger", className: "bg-danger-default text-danger-contrast" },
        { label: "Info", className: "bg-info-default text-info-contrast" }
      ]
    },
    {
      title: "Financial",
      items: [
        { label: "Income", className: "bg-financial-income-subtle text-financial-income" },
        { label: "Expense", className: "bg-financial-expense-subtle text-financial-expense" },
        { label: "Savings", className: "bg-financial-savings-subtle text-financial-savings" },
        { label: "Debt", className: "bg-financial-debt-subtle text-financial-debt" },
        { label: "Funded", className: "bg-success-subtle text-text-success" },
        { label: "Partial", className: "bg-warning-subtle text-text-warning" },
        { label: "Empty", className: "bg-background-muted text-text-muted" },
        { label: "Overspent", className: "bg-danger-subtle text-text-danger" },
        { label: "Goal progress", className: "bg-brand-subtle text-brand-default" },
        { label: "Goal complete", className: "bg-success-subtle text-text-success" }
      ]
    }
  ];

  const spacing = [
    { label: "0", className: "w-component-xs" },
    { label: "1", className: "w-component-xs" },
    { label: "2", className: "w-component-sm" },
    { label: "3", className: "w-component-md" },
    { label: "4", className: "w-component-lg" },
    { label: "5", className: "w-component-lg" },
    { label: "6", className: "w-component-xl" },
    { label: "8", className: "w-layout-sm" },
    { label: "10", className: "w-layout-md" },
    { label: "12", className: "w-layout-lg" },
    { label: "16", className: "w-layout-xl" }
  ];
  const radii = [
    { label: "none", className: "rounded-none" },
    { label: "sm", className: "rounded-component-sm" },
    { label: "md", className: "rounded-component-md" },
    { label: "lg", className: "rounded-component-lg" },
    { label: "full", className: "rounded-component-full" }
  ];
  const motion = [
    { label: "Fast", value: "120ms" },
    { label: "Normal", value: "180ms" },
    { label: "Slow", value: "240ms" }
  ];
</script>

<section class="grid gap-layout-lg bg-background-canvas p-layout-md text-text-default">
  <header class="grid gap-component-sm pb-layout-md">
    <div class="flex items-center gap-component-sm text-brand-default">
      <Icon name="abacus" className="size-component-lg" />
      <span class="text-sm font-semibold uppercase">Foundations</span>
    </div>
    <h1 class="text-3xl font-semibold">Tokens, cor e ritmo do sistema</h1>
    <p class="max-w-3xl text-sm text-text-muted">
      O sistema usa Inter como fonte principal, dark mode como experiência padrão e uma linguagem visual cyberpunk-gamificada para acelerar leitura e engajamento.
    </p>
  </header>

  <section class="grid gap-component-md">
    <div class="flex items-center gap-component-sm">
      <Icon name="magic-potion" className="size-component-md text-brand-default" />
      <h2 class="text-xl font-semibold">Paleta primitiva</h2>
    </div>
    <div class="grid gap-component-md lg:grid-cols-2 xl:grid-cols-3">
      {#each primitiveColors as group}
        <article class="grid gap-component-sm rounded-component-lg bg-background-surface p-component-lg shadow-surface">
          <h3 class="text-sm font-semibold uppercase text-text-muted">{group.title}</h3>
          <div class="grid grid-cols-2 gap-component-sm sm:grid-cols-3">
            {#each group.items as item}
              <div class={`rounded-component-md px-component-md py-component-lg text-sm font-semibold ${item.className}`}>{item.label}</div>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>

  <section class="grid gap-component-md">
    <div class="flex items-center gap-component-sm">
      <Icon name="book-aura" className="size-component-md text-brand-default" />
      <h2 class="text-xl font-semibold">Tokens semânticos</h2>
    </div>
    <div class="grid gap-component-md lg:grid-cols-2">
      {#each semanticColors as group}
        <article class="grid gap-component-sm rounded-component-lg bg-background-surface p-component-lg shadow-surface">
          <h3 class="text-sm font-semibold uppercase text-text-muted">{group.title}</h3>
          <div class="grid gap-component-sm sm:grid-cols-2">
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
      <Icon name="scroll-unfurled" className="size-component-md text-brand-default" />
      <h2 class="text-xl font-semibold">Tipografia</h2>
    </div>
    <article class="grid gap-component-md rounded-component-lg bg-background-surface p-component-lg shadow-surface">
      <div class="grid gap-component-xs">
        <p class="text-3xl font-semibold">Inter - Heading 1</p>
        <p class="text-2xl font-semibold">Inter - Heading 2</p>
        <p class="text-xl font-semibold">Inter - Heading 3</p>
        <p class="text-base text-text-default">Inter - corpo principal para leitura em telas financeiras.</p>
        <p class="font-numeric tabular-nums text-right text-financial-income">+R$ 5.400,00</p>
      </div>
    </article>
  </section>

  <section class="grid gap-component-md">
    <div class="flex items-center gap-component-sm">
      <Icon name="3d-stairs" className="size-component-md text-brand-default" />
      <h2 class="text-xl font-semibold">Espaçamento e formas</h2>
    </div>
    <div class="grid gap-component-md lg:grid-cols-3">
      <article class="grid gap-component-md rounded-component-lg bg-background-surface p-component-lg shadow-surface">
        <h3 class="text-sm font-semibold uppercase text-text-muted">Spacing</h3>
        <div class="grid gap-component-sm">
          {#each spacing as step}
            <div class="flex items-center gap-component-md text-sm">
              <span class="w-component-xl text-text-muted">{step.label}</span>
              <span class={`block h-component-sm rounded-component-full bg-brand-default ${step.className}`}></span>
            </div>
          {/each}
        </div>
      </article>

      <article class="grid gap-component-md rounded-component-lg bg-background-surface p-component-lg shadow-surface">
        <h3 class="text-sm font-semibold uppercase text-text-muted">Radius</h3>
        <div class="grid gap-component-sm">
          {#each radii as radius}
            <div class="flex items-center justify-between gap-component-md text-sm">
              <span class="text-text-muted">{radius.label}</span>
              <span class={`h-8 w-24 bg-brand-subtle ${radius.className}`}></span>
            </div>
          {/each}
        </div>
      </article>

      <article class="grid gap-component-md rounded-component-lg bg-background-surface p-component-lg shadow-surface">
        <h3 class="text-sm font-semibold uppercase text-text-muted">Motion</h3>
        <div class="grid gap-component-sm">
          {#each motion as item}
            <div class="flex items-center justify-between gap-component-md text-sm">
              <span class="text-text-muted">{item.label}</span>
              <span class="font-semibold text-text-default">{item.value}</span>
            </div>
          {/each}
        </div>
        <div class="flex items-center gap-component-sm text-brand-default">
          <Icon name="magic-swirl" className="size-component-md" />
          <span class="text-sm font-medium">Reduced motion é respeitado por animações em canvas e gráficos.</span>
        </div>
      </article>
    </div>
  </section>
</section>
