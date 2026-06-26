import type { Meta, StoryObj } from "@storybook/svelte-vite";

import FoundationPreview from "./FoundationPreview.svelte";

const meta = {
  title: "Foundations/Foundation",
  component: FoundationPreview,
  parameters: {
    layout: "fullscreen"
  },
  render: () => ({ Component: FoundationPreview })
} satisfies Meta<typeof FoundationPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
