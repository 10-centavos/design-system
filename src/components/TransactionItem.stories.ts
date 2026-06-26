import type { Meta, StoryObj } from "@storybook/svelte-vite";

import TransactionItem from "./TransactionItem.svelte";

const meta = {
  title: "Molecules/Transaction Item",
  component: TransactionItem,
  tags: ["autodocs"],
  args: {
    title: "Salario",
    category: "income",
    date: "26/06/2026",
    amount: 5400,
    type: "income"
  },
  argTypes: {
    type: { control: "select", options: ["income", "expense"] }
  },
  render: (args) => ({ Component: TransactionItem, props: args })
} satisfies Meta<typeof TransactionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Income: Story = {};

export const Expense: Story = {
  args: {
    title: "Mercado",
    category: "expense",
    amount: 286.73,
    type: "expense"
  }
};
