import type { Meta, StoryObj } from "@storybook/svelte-vite";

import ChartPanel from "./ChartPanel.svelte";

const meta = {
  title: "Components/ChartPanel",
  component: ChartPanel,
  tags: ["autodocs"],
  args: {
    title: "Receitas e despesas",
    summary: "Receitas seguem acima das despesas no periodo, com maior gasto em transporte no fim do mes.",
    type: "line",
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    series: [
      { label: "Receitas", tone: "income", values: [3200, 4200, 4800, 5400] },
      { label: "Despesas", tone: "expense", values: [900, 1240, 1800, 2380] }
    ]
  },
  argTypes: {
    type: { control: "select", options: ["line", "bar", "doughnut"] }
  },
  render: (args) => ({ Component: ChartPanel, props: args })
} satisfies Meta<typeof ChartPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Line: Story = {};

export const Bar: Story = {
  args: {
    title: "Orcamento por categoria",
    summary: "Alimentacao esta parcial, transporte esta acima do limite e reserva segue positiva.",
    type: "bar",
    labels: ["Alimentacao", "Transporte", "Reserva"],
    series: [
      { label: "Gasto", tone: "expense", values: [840, 620, 0] },
      { label: "Alocado", tone: "brand", values: [1200, 500, 900] }
    ]
  }
};

export const Doughnut: Story = {
  args: {
    title: "Distribuicao de despesas",
    summary: "Mercado e transporte concentram a maior parte das despesas do mes.",
    type: "doughnut",
    labels: ["Mercado", "Transporte", "Servicos"],
    series: [
      { label: "Despesas", tone: "expense", values: [286, 172, 130] }
    ]
  }
};
