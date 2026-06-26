import type { Meta, StoryObj } from "@storybook/svelte-vite";

import LayoutPreview from "./LayoutPreview.svelte";

const meta = {
  title: "Templates/Dashboard",
  component: LayoutPreview,
  parameters: {
    layout: "fullscreen"
  },
  render: () => ({ Component: LayoutPreview })
} satisfies Meta<typeof LayoutPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
