import React from "react";
import { Badge } from "@mantine/core";

export default {
  title: "Mantine/Badge",
  component: Badge,
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["outline", "light", "filled", "dot"],
    },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
    radius: {
      description: "Radius",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },

    label: { description: "Label", type: "string" },
  },
};

const Template = (args) => <Badge {...args}>{args.label}</Badge>;

export const MantineBadge = Template.bind({});
MantineBadge.args = {
  label: "Badge",
  variant: "light",
  size: "md",
  radius: "lg",
};
