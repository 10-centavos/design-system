import type { Meta, StoryObj } from "@storybook/svelte-vite";

import Card from "./Card.svelte";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    as: "section",
    interactive: false
  },
  argTypes: {
    as: { control: "select", options: ["section", "article", "div"] }
  },
  render: (args) => ({
    Component: Card,
    props: args
  })
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  args: {
    interactive: true
  }
};
