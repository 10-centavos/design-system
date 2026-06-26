import type { Meta, StoryObj } from "@storybook/svelte-vite";

import MoneyValue from "./MoneyValue.svelte";

const meta = {
  title: "Atoms/Money Value",
  component: MoneyValue,
  tags: ["autodocs"],
  args: {
    amount: 1280.45,
    tone: "auto",
    locale: "pt-BR",
    currency: "BRL",
    hidden: false
  },
  argTypes: {
    tone: { control: "select", options: ["positive", "negative", "neutral", "auto"] }
  },
  render: (args) => ({ Component: MoneyValue, props: args })
} satisfies Meta<typeof MoneyValue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Positive: Story = {};

export const Negative: Story = {
  args: {
    amount: -324.9
  }
};

export const Neutral: Story = {
  args: {
    amount: 0,
    tone: "neutral"
  }
};

export const Hidden: Story = {
  args: {
    hidden: true
  }
};
