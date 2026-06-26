import type { Meta, StoryObj } from "@storybook/svelte-vite";

import IconPreview from "./IconPreview.svelte";

const meta = {
  title: "Foundations/Icons",
  component: IconPreview,
  render: () => ({ Component: IconPreview })
} satisfies Meta<typeof IconPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Lucide: Story = {};
