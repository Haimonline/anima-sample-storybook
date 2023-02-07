import React from "react";
import { Button } from "@mantine/core";

export default {
  title: "Mantine/Button",
  component: Button,
  argTypes: {
    variant: {
      description: "Variant",
      control: { type: "select" },
      options: ["outline", "white", "light", "default", "filled"],
    },
    label: { description: "Label", type: "string" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md"],
    },
    uppercase: { description: "Uppercase", type: "boolean" },
    compact: { description: "Compact", type: "boolean" },
    disabled: { description: "Disabled", type: "boolean" },
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["gray", "red", "indigo", "blue", "green", "orange"],
    },
  },
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const MantineButton = Template.bind({});
MantineButton.args = {
  label: "Button",
  variant: "default",
  size: "xs",
  uppercase: false,
  compact: false,
  disabled: false,
  color: "blue",
};
