import type { Preview } from "@storybook/svelte-vite";

import "../src/styles/tokens.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "var(--color-background-canvas)" },
        { name: "surface", value: "var(--color-background-surface)" }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: "padded"
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Design token theme",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" }
        ]
      }
    }
  },
  decorators: [
    (story, context) => {
      document.documentElement.dataset.theme = context.globals.theme === "dark" ? "dark" : "light";
      return story();
    }
  ]
};

export default preview;
