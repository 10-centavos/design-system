import type { Meta, StoryObj } from "@storybook/svelte-vite";

import AgentModelsPreview from "./AgentModelsPreview.svelte";

const meta = {
  title: "Models/Agent Models",
  component: AgentModelsPreview,
  parameters: {
    layout: "fullscreen"
  },
  render: () => ({ Component: AgentModelsPreview })
} satisfies Meta<typeof AgentModelsPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
