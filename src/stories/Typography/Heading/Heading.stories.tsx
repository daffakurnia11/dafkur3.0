import Heading from "@/components/Typography/Heading";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Heading",
    as: "h1",
    className: "text-green-primary",
    style: {},
    level: 1,
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5],
      control: {
        type: "select",
      },
      description: "The level of the heading.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

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
