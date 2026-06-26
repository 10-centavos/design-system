import type { Meta, StoryObj } from "@storybook/svelte-vite";

import LayoutModelPreview from "./LayoutModelPreview.svelte";

const meta = {
  title: "Layouts/Models",
  component: LayoutModelPreview,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    model: "agent-command"
  },
  argTypes: {
    model: { control: "select", options: ["agent-command", "budget-review", "planning-room"] }
  },
  render: (args) => ({ Component: LayoutModelPreview, props: args })
} satisfies Meta<typeof LayoutModelPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AgentCommand: Story = {};

export const BudgetReview: Story = {
  args: {
    model: "budget-review"
  }
};

export const PlanningRoom: Story = {
  args: {
    model: "planning-room"
  }
};
