import type { Meta, StoryObj } from "@storybook/svelte-vite";

import AgentModalsPreview from "./AgentModalsPreview.svelte";

const meta = {
  title: "Organisms/Agent Modals",
  component: AgentModalsPreview,
  parameters: {
    layout: "fullscreen"
  },
  render: () => ({ Component: AgentModalsPreview })
} satisfies Meta<typeof AgentModalsPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
