<script lang="ts">
  import {
    ArrowDownCircle,
    ArrowUpCircle,
    Bot,
    CheckCircle2,
    CircleDollarSign,
    Clock3,
    LayoutDashboard,
    ListChecks,
    PiggyBank,
    Plus,
    Target
  } from "@lucide/svelte";

  import Alert from "../components/Alert.svelte";
  import Badge from "../components/Badge.svelte";
  import BudgetCategoryRow from "../components/BudgetCategoryRow.svelte";
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import ChartPanel from "../components/ChartPanel.svelte";
  import GoalCard from "../components/GoalCard.svelte";
  import MoneyValue from "../components/MoneyValue.svelte";
  import TransactionItem from "../components/TransactionItem.svelte";

  export let view: "agent-command" | "budget-review" | "planning-room" = "agent-command";

  const navigation = [
    { label: "Dashboard", icon: LayoutDashboard, active: view === "agent-command" },
    { label: "Revisao", icon: ListChecks, active: view === "budget-review" },
    { label: "Planejamento", icon: Target, active: view === "planning-room" }
  ];
</script>

<section class="min-h-screen bg-background-canvas text-text-default">
  <header class="border-b border-border-default bg-background-surface">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-component-md p-layout-sm">
      <div class="flex items-center gap-component-sm text-sm font-semibold text-brand-default">
        <CircleDollarSign aria-hidden="true" class="size-component-md" />
        10 Centavos
      </div>

      <nav class="flex flex-wrap items-center gap-component-xs text-sm text-text-muted" aria-label="Modais">
        {#each navigation as item}
          <a class={`flex items-center gap-component-sm rounded-component-md px-component-sm py-component-xs ${item.active ? "bg-brand-default text-brand-contrast" : ""}`} href="/">
            <svelte:component this={item.icon} aria-hidden="true" class="size-component-md" />
            {item.label}
          </a>
        {/each}
      </nav>

      <Button variant="primary">
        <Plus aria-hidden="true" class="size-component-md" />
        Novo plano
      </Button>
    </div>
  </header>

  {#if view === "agent-command"}
    <main class="mx-auto grid max-w-screen-xl gap-layout-lg p-layout-md">
      <section class="grid gap-component-md">
        <div class="flex flex-wrap items-start justify-between gap-component-md">
          <div class="grid gap-component-xs">
            <Badge tone="success">agente ativo</Badge>
            <h1 class="text-3xl font-semibold">Centro de comando</h1>
          </div>
          <MoneyValue amount={8420.35} tone="neutral" />
        </div>
        <Alert tone="info" title="Resumo do agente" message="Fluxo de caixa positivo, uma categoria overspent e uma meta em progresso." />
      </section>

      <section class="grid gap-layout-md lg:grid-cols-5">
        <div class="grid gap-component-md lg:col-span-3">
          <ChartPanel
            title="Fluxo do mes"
            summary="Receitas e despesas aparecem como series nomeadas para evitar dependencia exclusiva de cor."
            type="line"
            labels={["Semana 1", "Semana 2", "Semana 3", "Semana 4"]}
            series={[
              { label: "Receitas", tone: "income", values: [3200, 4200, 4800, 5400] },
              { label: "Despesas", tone: "expense", values: [900, 1240, 1800, 2380] }
            ]}
          />
          <Card>
            <div class="grid gap-component-md">
              <h2 class="text-xl font-semibold">Transacoes recentes</h2>
              <TransactionItem title="Salario" category="income" date="26/06/2026" amount={5400} type="income" />
              <TransactionItem title="Mercado" category="expense" date="25/06/2026" amount={286.73} type="expense" />
            </div>
          </Card>
        </div>

        <aside class="grid content-start gap-component-md lg:col-span-2">
          <Card className="border-brand-default bg-brand-subtle">
            <div class="grid gap-component-md">
              <div class="flex items-center gap-component-sm text-brand-default">
                <Bot aria-hidden="true" class="size-component-lg" />
                <h2 class="text-xl font-semibold">Proxima melhor acao</h2>
              </div>
              <p class="text-sm text-text-default">Realocar valor para transporte antes do fechamento mensal.</p>
              <Button variant="primary">Gerar ajuste</Button>
            </div>
          </Card>
          <GoalCard title="Reserva de emergencia" current={7200} target={12000} />
        </aside>
      </section>
    </main>
  {:else if view === "budget-review"}
    <main class="mx-auto grid max-w-screen-xl gap-layout-lg p-layout-md">
      <section class="grid gap-component-md">
        <div class="flex items-center gap-component-sm text-warning-default">
          <Clock3 aria-hidden="true" class="size-component-md" />
          <span class="text-sm font-medium">Revisao semanal</span>
        </div>
        <h1 class="text-3xl font-semibold">Revisar orcamento</h1>
      </section>

      <section class="grid gap-layout-md lg:grid-cols-3">
        <div class="grid gap-component-md lg:col-span-2">
          <BudgetCategoryRow name="Alimentacao" allocated={1200} spent={840} status="partial" />
          <BudgetCategoryRow name="Transporte" allocated={500} spent={620} status="overspent" />
          <BudgetCategoryRow name="Reserva" allocated={900} spent={0} status="funded" />
        </div>

        <aside class="grid content-start gap-component-md">
          <ChartPanel
            title="Alocado versus gasto"
            summary="Transporte passou do alocado; reserva segue financiada."
            type="bar"
            labels={["Alimentacao", "Transporte", "Reserva"]}
            series={[
              { label: "Alocado", tone: "brand", values: [1200, 500, 900] },
              { label: "Gasto", tone: "expense", values: [840, 620, 0] }
            ]}
            />
          <Alert tone="danger" title="Acao necessaria" message="Transporte esta overspent e deve ser revisado." />
        </aside>
      </section>
    </main>
  {:else}
    <main class="mx-auto grid max-w-screen-xl gap-layout-lg p-layout-md">
      <section class="grid gap-component-md">
        <div class="flex items-center gap-component-sm text-financial-goal-progress">
          <Target aria-hidden="true" class="size-component-md" />
          <span class="text-sm font-medium">Planejamento assistido</span>
        </div>
        <h1 class="text-3xl font-semibold">Plano para os proximos 30 dias</h1>
      </section>

      <section class="grid gap-layout-md lg:grid-cols-3">
        <Card>
          <div class="grid gap-component-md">
            <div class="flex items-center gap-component-sm text-financial-income">
              <ArrowUpCircle aria-hidden="true" class="size-component-md" />
              <h2 class="text-lg font-semibold">Entradas previstas</h2>
            </div>
            <MoneyValue amount={5400} tone="positive" />
          </div>
        </Card>

        <Card>
          <div class="grid gap-component-md">
            <div class="flex items-center gap-component-sm text-financial-expense">
              <ArrowDownCircle aria-hidden="true" class="size-component-md" />
              <h2 class="text-lg font-semibold">Saidas planejadas</h2>
            </div>
            <MoneyValue amount={-3200} tone="negative" />
          </div>
        </Card>

        <Card className="border-success-default bg-success-subtle">
          <div class="grid gap-component-md">
            <div class="flex items-center gap-component-sm text-text-success">
              <CheckCircle2 aria-hidden="true" class="size-component-md" />
              <h2 class="text-lg font-semibold">Meta recomendada</h2>
            </div>
            <p class="text-sm text-text-default">Guardar parte do saldo positivo para acelerar a reserva.</p>
          </div>
        </Card>
      </section>

      <ChartPanel
        title="Projecao de saldo"
        summary="Saldo projetado permanece positivo com a contribuicao sugerida para reserva."
        type="line"
        labels={["Hoje", "7 dias", "15 dias", "30 dias"]}
        series={[
          { label: "Saldo", tone: "brand", values: [8420, 8100, 8800, 9300] },
          { label: "Reserva", tone: "savings", values: [7200, 7400, 7600, 7900] }
        ]}
      />
    </main>
  {/if}
</section>
