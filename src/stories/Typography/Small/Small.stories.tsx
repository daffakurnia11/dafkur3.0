import Small from "../../../components/Typography/Small";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Small> = {
  title: "Typography/Small",
  component: Small,
  tags: ["autodocs"],
  args: {
    children: "Small Text",
    as: "small",
    className: "text-green-primary",
    style: {},
  },
};

export default meta;
type Story = StoryObj<typeof Small>;

export const Default: Story = {
  args: {
    isScrambled: false,
  },
};

export const Scrambled: Story = {
  args: {
    isScrambled: true,
  },
};
