import type { Meta, StoryObj } from "@storybook/svelte-vite";

import Badge from "./Badge.svelte";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    label: "income",
    tone: "income"
  },
  argTypes: {
    tone: {
      control: "select",
      options: ["neutral", "income", "expense", "savings", "debt", "info", "warning", "danger", "success"]
    }
  },
  render: (args) => ({ Component: Badge, props: args })
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Income: Story = {};

export const Expense: Story = {
  args: {
    label: "expense",
    tone: "expense"
  }
};

export const Savings: Story = {
  args: {
    label: "savings",
    tone: "savings"
  }
};

export const Debt: Story = {
  args: {
    label: "debt",
    tone: "debt"
  }
};

export const Info: Story = {
  args: {
    label: "info",
    tone: "info"
  }
};
