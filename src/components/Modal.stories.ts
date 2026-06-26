import type { Meta, StoryObj } from "@storybook/svelte-vite";

import ModalPreview from "../stories/ModalPreview.svelte";

const meta = {
  title: "Organisms/Modal",
  component: ModalPreview,
  parameters: {
    layout: "fullscreen"
  },
  args: {
    variant: "confirm"
  },
  argTypes: {
    variant: { control: "select", options: ["confirm", "edit-budget", "agent"] }
  },
  render: (args) => ({ Component: ModalPreview, props: args })
} satisfies Meta<typeof ModalPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfirmDelete: Story = {};

export const EditBudget: Story = {
  args: { variant: "edit-budget" }
};

export const AgentAction: Story = {
  args: { variant: "agent" }
};
