import type { Meta, StoryObj } from "@storybook/svelte-vite";

import Alert from "./Alert.svelte";

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    tone: "info",
    title: "Orcamento atualizado",
    message: "Os valores foram recalculados com base nas transacoes recentes."
  },
  argTypes: {
    tone: { control: "select", options: ["info", "success", "warning", "danger"] }
  },
  render: (args) => ({ Component: Alert, props: args })
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const Success: Story = {
  args: {
    tone: "success",
    title: "Meta concluida",
    message: "A reserva de emergencia atingiu o valor planejado."
  }
};

export const Warning: Story = {
  args: {
    tone: "warning",
    title: "Categoria perto do limite",
    message: "Alimentacao ja usou a maior parte do valor alocado."
  }
};

export const Danger: Story = {
  args: {
    tone: "danger",
    title: "Orcamento estourado",
    message: "A categoria transporte passou do limite mensal."
  }
};
