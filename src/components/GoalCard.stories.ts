import type { Meta, StoryObj } from "@storybook/svelte-vite";

import GoalCard from "./GoalCard.svelte";

const meta = {
  title: "Components/GoalCard",
  component: GoalCard,
  tags: ["autodocs"],
  args: {
    title: "Reserva de emergencia",
    current: 7200,
    target: 12000
  },
  render: (args) => ({ Component: GoalCard, props: args })
} satisfies Meta<typeof GoalCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InProgress: Story = {};

export const Completed: Story = {
  args: {
    title: "Viagem",
    current: 8500,
    target: 8500
  }
};
