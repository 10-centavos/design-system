import type { StorybookConfig } from "@storybook/svelte-vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|svelte)"],
  addons: [],
  framework: {
    name: "@storybook/svelte-vite",
    options: {
      docgen: false
    }
  },
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [...(config.plugins ?? []), svelte()]
    };
  }
};

export default config;
