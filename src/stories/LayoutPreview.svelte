<script lang="ts">
  import { CalendarDays, PiggyBank, Plus } from "@lucide/svelte";

  import Alert from "../components/Alert.svelte";
  import Badge from "../components/Badge.svelte";
  import BudgetCategoryRow from "../components/BudgetCategoryRow.svelte";
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import ChartPanel from "../components/ChartPanel.svelte";
  import GoalCard from "../components/GoalCard.svelte";
  import Icon from "../components/Icon.svelte";
  import Input from "../components/Input.svelte";
  import MoneyValue from "../components/MoneyValue.svelte";
  import Select from "../components/Select.svelte";
  import TransactionItem from "../components/TransactionItem.svelte";

  const categoryOptions = [
    { label: "Alimentacao", value: "food" },
    { label: "Transporte", value: "transport" },
    { label: "Reserva", value: "savings" }
  ];
</script>

<section class="min-h-screen bg-background-canvas text-text-default">
  <header class="sticky top-0 z-20 border-b border-border-default bg-background-surface/95 backdrop-blur-sm">
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-component-md px-layout-md py-component-md">
      <div class="flex items-center gap-component-sm text-sm font-semibold text-brand-default">
        <Icon name="abacus" className="size-component-md" />
        10 Centavos
      </div>

      <nav class="flex flex-wrap items-center gap-component-xs text-sm" aria-label="Secoes">
        <a class="flex items-center gap-component-sm rounded-component-full bg-brand-default px-component-md py-component-xs text-brand-contrast" href="#dashboard">
          <Icon name="game-console" className="size-component-md" />
          Dashboard
        </a>
        <a class="flex items-center gap-component-sm rounded-component-full bg-background-muted px-component-md py-component-xs text-text-default" href="#orcamento">
          <PiggyBank aria-hidden="true" class="size-component-md text-financial-savings" />
          Orcamento
        </a>
        <a class="flex items-center gap-component-sm rounded-component-full bg-background-muted px-component-md py-component-xs text-text-default" href="#metas">
          <Icon name="trophy-cup" className="size-component-md text-financial-goal-progress" />
          Metas
        </a>
      </nav>

      <div class="flex items-center gap-component-sm">
        <Badge tone="victory">lvl 07</Badge>
        <Badge tone="warning">streak 9d</Badge>
        <Button variant="primary">
          Nova missao
          <svelte:fragment slot="icon">
            <Plus aria-hidden="true" class="size-component-md" />
          </svelte:fragment>
        </Button>
      </div>
    </div>
  </header>

  <main id="dashboard" class="mx-auto grid max-w-screen-xl gap-layout-lg px-layout-md py-layout-md">
    <section class="grid gap-layout-md lg:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <div class="grid gap-component-md">
          <div class="flex flex-wrap items-center justify-between gap-component-md">
            <div class="grid gap-component-xs">
              <div class="flex items-center gap-component-sm text-sm text-text-muted">
                <CalendarDays aria-hidden="true" class="size-component-md" />
                Missao do dia
              </div>
              <h1 class="text-3xl font-semibold">Ganhar XP sem perder o controle do caixa</h1>
            </div>
            <div class="flex items-center gap-component-sm rounded-component-full border border-border-default bg-background-muted px-component-md py-component-xs text-sm">
              <Icon name="trophy-cup" className="size-component-md text-warning-default" />
              420 XP
            </div>
          </div>

          <div class="grid gap-component-md md:grid-cols-3">
            <div class="rounded-component-full border border-border-default bg-background-muted px-component-md py-component-sm">
              <p class="text-xs uppercase tracking-wide text-text-muted">Saldo</p>
              <MoneyValue amount={8420.35} tone="neutral" />
            </div>
            <div class="rounded-component-full border border-border-default bg-success-subtle px-component-md py-component-sm">
              <p class="text-xs uppercase tracking-wide text-text-success">XP ganho</p>
              <MoneyValue amount={5400} tone="positive" />
            </div>
            <div class="rounded-component-full border border-border-default bg-danger-subtle px-component-md py-component-sm">
              <p class="text-xs uppercase tracking-wide text-text-danger">Risco</p>
              <MoneyValue amount={-2380.9} tone="negative" />
            </div>
          </div>

          <Alert tone="warning" title="Boss fight do mes" message="Transporte esta overspent; o agente recomenda um ajuste antes do fechamento." />
        </div>
      </Card>

      <Card className="border-brand-default bg-brand-subtle shadow-elevated">
        <div class="grid gap-component-md">
          <div class="flex flex-wrap items-start justify-between gap-component-md">
            <div class="flex items-center gap-component-md">
              <div class="grid size-16 grid-cols-4 gap-1 rounded-component-sm border border-border-focus bg-background-surface p-2 shadow-surface" aria-hidden="true">
                <span class="bg-brand-default"></span>
                <span class="bg-brand-default"></span>
                <span class="bg-brand-hover"></span>
                <span class="bg-brand-default"></span>
                <span class="bg-brand-hover"></span>
                <span class="bg-warning-default"></span>
                <span class="bg-warning-default"></span>
                <span class="bg-brand-hover"></span>
                <span class="bg-brand-default"></span>
                <span class="bg-background-muted"></span>
                <span class="bg-background-muted"></span>
                <span class="bg-brand-default"></span>
                <span class="bg-success-default"></span>
                <span class="bg-brand-default"></span>
                <span class="bg-brand-hover"></span>
                <span class="bg-success-default"></span>
              </div>
              <div class="grid gap-component-xs">
                <div class="flex items-center gap-component-sm text-sm font-semibold uppercase text-brand-default">
                  <Icon name="robot-helmet" className="size-component-md" />
                  Agente 07
                </div>
                <h2 class="text-2xl font-bold">Modo ataque</h2>
              </div>
            </div>
            <Badge tone="warning">boss: overspend</Badge>
          </div>

          <div class="grid gap-component-sm rounded-component-md border border-border-default bg-background-surface p-component-md">
            <div class="flex items-center justify-between gap-component-sm text-xs font-semibold uppercase text-text-muted">
              <span>energia da reserva</span>
              <span class="font-numeric text-brand-default">72%</span>
            </div>
            <div class="grid grid-cols-10 gap-component-xs" aria-hidden="true">
              <span class="h-2 rounded-component-sm bg-success-default"></span>
              <span class="h-2 rounded-component-sm bg-success-default"></span>
              <span class="h-2 rounded-component-sm bg-success-default"></span>
              <span class="h-2 rounded-component-sm bg-success-default"></span>
              <span class="h-2 rounded-component-sm bg-success-default"></span>
              <span class="h-2 rounded-component-sm bg-success-default"></span>
              <span class="h-2 rounded-component-sm bg-success-default"></span>
              <span class="h-2 rounded-component-sm bg-background-muted"></span>
              <span class="h-2 rounded-component-sm bg-background-muted"></span>
              <span class="h-2 rounded-component-sm bg-background-muted"></span>
            </div>
          </div>

          <div class="grid gap-component-sm text-sm">
            <p class="text-text-default">Prioridade: derrubar overspend e liberar mais XP para a reserva.</p>
            <p class="text-text-muted">Combo de hoje: mover parte do excesso para a meta de emergencia.</p>
          </div>

          <div class="flex flex-wrap gap-component-sm">
            <Badge tone="success">quest pronta</Badge>
            <Badge tone="warning">loot pendente</Badge>
            <Badge tone="info">semana 4</Badge>
          </div>

          <div class="grid gap-component-sm sm:grid-cols-2">
            <Button variant="primary">
              Usar poder
              <svelte:fragment slot="icon">
                <Icon name="magic-potion" className="size-component-md" />
              </svelte:fragment>
            </Button>
            <Button variant="secondary">
              Ver combo
              <svelte:fragment slot="icon">
                <Icon name="trophy-cup" className="size-component-md text-warning-default" />
              </svelte:fragment>
            </Button>
          </div>
        </div>
      </Card>
    </section>

    <section class="grid gap-layout-md lg:grid-cols-4">
      <div class="grid gap-layout-md lg:col-span-2">
        <ChartPanel
          title="Receitas e despesas"
          summary="Painel de batalha com as duas series principais do mes."
          type="line"
          labels={["Semana 1", "Semana 2", "Semana 3", "Semana 4"]}
          series={[
            { label: "Receitas", tone: "income", values: [3200, 4200, 4800, 5400] },
            { label: "Despesas", tone: "expense", values: [900, 1240, 1800, 2380] }
          ]}
        />

        <Card>
          <div class="grid gap-component-md">
            <div class="flex items-center gap-component-sm">
              <Icon name="magic-swirl" className="size-component-md text-brand-default" />
              <h2 class="text-xl font-semibold">Quest log</h2>
            </div>
            <div class="grid gap-component-sm">
              <BudgetCategoryRow name="Alimentacao" allocated={1200} spent={840} status="partial" />
              <BudgetCategoryRow name="Transporte" allocated={500} spent={620} status="overspent" />
            </div>
          </div>
        </Card>
      </div>

      <aside class="grid content-start gap-component-md lg:col-span-2">
        <GoalCard title="Reserva de emergencia" current={7200} target={12000} />

        <ChartPanel
          title="Distribuicao de despesas"
          summary="Radar rápido para ver onde a dor esta concentrada."
          type="doughnut"
          labels={["Mercado", "Transporte", "Servicos"]}
          series={[{ label: "Despesas", tone: "expense", values: [286, 172, 130] }]}
        />

        <Card>
          <form class="grid gap-component-md">
            <Input id="layout-search" name="layout-search" type="search" inputMode="search" label="Buscar" placeholder="Buscar transacoes" />
            <Select id="layout-category" name="layout-category" label="Categoria" value="food" options={categoryOptions} />
            <Button variant="secondary">
              Filtrar
              <svelte:fragment slot="icon">
                <Icon name="magnify" set="mdi" className="size-component-md" />
              </svelte:fragment>
            </Button>
          </form>
        </Card>
      </aside>
    </section>
  </main>
</section>
