<script lang="ts">
  import { Bot, BrainCircuit, ChartNoAxesCombined, ListChecks } from "@lucide/svelte";

  import Badge from "../components/Badge.svelte";
  import Button from "../components/Button.svelte";
  import Card from "../components/Card.svelte";
  import ChartPanel from "../components/ChartPanel.svelte";

  const models = [
    {
      title: "Budget Reviewer",
      tone: "warning",
      icon: ListChecks,
      summary: "Detecta categorias parcial, funded, empty e overspent antes do fechamento."
    },
    {
      title: "Cashflow Forecaster",
      tone: "success",
      icon: ChartNoAxesCombined,
      summary: "Projeta saldo e antecipa risco de despesas acima das entradas."
    },
    {
      title: "Goal Planner",
      tone: "savings",
      icon: BrainCircuit,
      summary: "Sugere contribuicoes para metas sem esconder o impacto no fluxo mensal."
    }
  ];
</script>

<section class="grid gap-layout-lg bg-background-canvas p-layout-md text-text-default">
  <header class="grid gap-component-sm">
    <div class="flex items-center gap-component-sm text-brand-default">
      <Bot aria-hidden="true" class="size-component-lg" />
      <span class="text-sm font-semibold">Modelos de agente</span>
    </div>
    <h1 class="text-3xl font-semibold">Padrões para dashboards assistidos</h1>
  </header>

  <div class="grid gap-component-md lg:grid-cols-3">
    {#each models as item}
      <Card className="shadow-none">
        <div class="grid gap-component-md">
          <div class="flex items-center justify-between gap-component-md">
            <svelte:component this={item.icon} aria-hidden="true" class="size-component-lg text-brand-default" />
            <Badge tone={item.tone}>{item.tone}</Badge>
          </div>
          <div class="grid gap-component-xs">
            <h2 class="text-lg font-semibold">{item.title}</h2>
            <p class="text-sm text-text-muted">{item.summary}</p>
          </div>
          <Button variant="secondary">Usar modelo</Button>
        </div>
      </Card>
    {/each}
  </div>

  <ChartPanel
    title="Sinal do agente"
    summary="A acao recomendada e baseada em risco de despesa, saldo projetado e progresso de meta."
    type="bar"
    labels={["Risco", "Saldo", "Meta"]}
    series={[
      { label: "Score", tone: "brand", values: [72, 84, 60] },
      { label: "Atencao", tone: "warning", values: [68, 20, 30] }
    ]}
    className="shadow-none"
  />
</section>
