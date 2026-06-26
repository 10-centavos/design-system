import type { Meta, StoryObj } from "@storybook/svelte-vite";

import PixelCanvasPreview from "./PixelCanvasPreview.svelte";

const meta = {
  title: "Foundations/Pixel Canvas",
  component: PixelCanvasPreview,
  parameters: {
    layout: "fullscreen"
  },
  render: () => ({ Component: PixelCanvasPreview })
} satisfies Meta<typeof PixelCanvasPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
