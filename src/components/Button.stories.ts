import type { Meta, StoryObj } from "@storybook/svelte-vite";

import { Plus } from "@lucide/svelte";

import Button from "./Button.svelte";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    label: "Adicionar transacao",
    variant: "primary",
    disabled: false,
    loading: false
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost", "danger"] },
    iconPosition: { control: "select", options: ["left", "right"] },
    iconOnly: { control: "boolean" }
  },
  render: (args) => ({ Component: Button, props: args })
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    label: "Ver detalhes",
    variant: "secondary"
  }
};

export const Ghost: Story = {
  args: {
    label: "Cancelar",
    variant: "ghost"
  }
};

export const Danger: Story = {
  args: {
    label: "Excluir categoria",
    variant: "danger"
  }
};

export const Loading: Story = {
  args: {
    label: "Salvando",
    loading: true
  }
};

export const IconOnly: Story = {
  args: {
    ariaLabel: "Adicionar transacao",
    iconOnly: true,
    label: "Adicionar transacao"
  },
  render: (args) => ({
    Component: Button,
    props: args,
    slots: {
      icon: {
        Component: Plus
      }
    }
  })
};
