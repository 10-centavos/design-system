import type { Meta, StoryObj } from "@storybook/svelte-vite";

import Select from "./Select.svelte";

const options = [
  { label: "Alimentacao", value: "food" },
  { label: "Transporte", value: "transport" },
  { label: "Reserva", value: "savings" }
];

const meta = {
  title: "Atoms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    id: "category",
    name: "category",
    label: "Categoria",
    value: "food",
    options
  },
  render: (args) => ({ Component: Select, props: args })
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: "Selecione uma categoria."
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
