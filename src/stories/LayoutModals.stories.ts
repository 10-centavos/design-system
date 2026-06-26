import type { Meta, StoryObj } from "@storybook/svelte-vite";

import LayoutModalPreview from "./LayoutModalPreview.svelte";

const meta = {
  title: "Templates/Modals",
  component: LayoutModalPreview,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    view: "agent-command"
  },
  argTypes: {
    view: { control: "select", options: ["agent-command", "budget-review", "planning-room"] }
  },
  render: (args) => ({ Component: LayoutModalPreview, props: args })
} satisfies Meta<typeof LayoutModalPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AgentCommand: Story = {};

export const BudgetReview: Story = {
  args: {
    view: "budget-review"
  }
};

export const PlanningRoom: Story = {
  args: {
    view: "planning-room"
  }
};
