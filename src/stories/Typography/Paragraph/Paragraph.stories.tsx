import Paragraph from "@/components/Typography/Paragraph";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Paragraph> = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  args: {
    children: "Paragraph",
    as: "p",
    className: "text-green-primary",
    style: {},
  },
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

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
