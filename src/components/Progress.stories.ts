import type { Meta, StoryObj } from "@storybook/svelte-vite";

import Progress from "./Progress.svelte";

const meta = {
  title: "Atoms/Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    value: 64,
    max: 100,
    label: "Progresso do orcamento",
    state: "progress"
  },
  argTypes: {
    state: { control: "select", options: ["funded", "partial", "empty", "overspent", "complete", "progress"] }
  },
  render: (args) => ({ Component: Progress, props: args })
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GoalProgress: Story = {};

export const Funded: Story = {
  args: {
    value: 100,
    state: "funded"
  }
};

export const Partial: Story = {
  args: {
    value: 55,
    state: "partial"
  }
};

export const Overspent: Story = {
  args: {
    value: 100,
    state: "overspent"
  }
};
