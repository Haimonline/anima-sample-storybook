import React from "react";
import { Checkbox } from "@mantine/core";

export default {
  title: "Mantine/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { description: "Label", type: "string" },
    description: { description: "Description", type: "string" },
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["gray", "red", "indigo", "blue", "green", "orange"],
    },
    disabled: { description: "Disabled", type: "boolean" },
    checked: { description: "Checked", type: "boolean" },
    intermediate: { description: "Intermediate", type: "boolean" },
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md"],
    },
    radius: {
      description: "Radius",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
  },
};

const Template = (args) => <Checkbox {...args} />;
export const MantineCheckbox = Template.bind({});
MantineCheckbox.args = {
  label: "Checkbox",
  description: "Description",
  color: "blue",
  disabled: false,
  checked: false,
  intermediate: false,
  size: "sm",
  radius: "sm",
};
