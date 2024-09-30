import { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"], // 👈 Add this
  // ...
  // framework: '@storybook/react-webpack5', 👈 Remove this
  framework: "@storybook/nextjs", // 👈 Add this
};

export default config;
