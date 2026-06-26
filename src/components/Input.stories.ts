import type { Meta, StoryObj } from "@storybook/svelte-vite";

import Input from "./Input.svelte";

const meta = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    id: "amount",
    name: "amount",
    label: "Valor",
    placeholder: "R$ 0,00",
    inputMode: "decimal",
    type: "text"
  },
  argTypes: {
    type: { control: "select", options: ["text", "search", "number"] },
    inputMode: { control: "select", options: ["text", "search", "decimal", "numeric"] }
  },
  render: (args) => ({ Component: Input, props: args })
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Money: Story = {};

export const Search: Story = {
  args: {
    id: "search",
    name: "search",
    label: "Buscar",
    placeholder: "Buscar transacoes",
    inputMode: "search",
    type: "search"
  }
};

export const Error: Story = {
  args: {
    error: "Informe um valor maior que zero."
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "R$ 120,00"
  }
};
