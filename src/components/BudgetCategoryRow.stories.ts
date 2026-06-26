import type { Meta, StoryObj } from "@storybook/svelte-vite";

import BudgetCategoryRow from "./BudgetCategoryRow.svelte";

const meta = {
  title: "Components/BudgetCategoryRow",
  component: BudgetCategoryRow,
  tags: ["autodocs"],
  args: {
    name: "Alimentacao",
    allocated: 1200,
    spent: 840,
    status: "partial"
  },
  argTypes: {
    status: { control: "select", options: ["funded", "partial", "empty", "overspent"] }
  },
  render: (args) => ({ Component: BudgetCategoryRow, props: args })
} satisfies Meta<typeof BudgetCategoryRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Partial: Story = {};

export const Funded: Story = {
  args: {
    name: "Moradia",
    allocated: 2200,
    spent: 2200,
    status: "funded"
  }
};

export const Empty: Story = {
  args: {
    name: "Lazer",
    allocated: 600,
    spent: 0,
    status: "empty"
  }
};

export const Overspent: Story = {
  args: {
    name: "Transporte",
    allocated: 500,
    spent: 620,
    status: "overspent"
  }
};
