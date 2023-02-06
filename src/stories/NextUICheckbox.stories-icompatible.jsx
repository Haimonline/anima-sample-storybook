import React from "react";
import { Checkbox } from "@nextui-org/react";

export default {
  title: "Next UI/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { type: "boolean" },
    disabled: { type: "boolean" },
    size: {
      control: {
        type: "select",
        options: ["xs", "md"],
      },
    },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "warning"],
      },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;
export const NextUiCheckbox = Template.bind({});

NextUiCheckbox.args = {
  checked: true,
  disabled: false,
  color: "primary",
  size: "md",
};
