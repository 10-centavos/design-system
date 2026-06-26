import type { Meta, StoryObj } from "@storybook/svelte-vite";

import Skeleton from "./Skeleton.svelte";

const meta = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    variant: "text",
    label: "Carregando"
  },
  argTypes: {
    variant: { control: "select", options: ["text", "card", "row"] }
  },
  render: (args) => ({ Component: Skeleton, props: args })
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};

export const Card: Story = {
  args: {
    variant: "card"
  }
};

export const Row: Story = {
  args: {
    variant: "row"
  }
};
