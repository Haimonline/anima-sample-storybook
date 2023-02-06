import React from "react";
import { Switch } from "@nextui-org/react";

export default {
  title: "Next UI/Switch",
  component: Switch,
  argTypes: {
    checked: { type: "boolean" },
    disabled: { type: "boolean" },
    squared: { type: "boolean" },
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

const Template = (args) => <Switch {...args} />;
export const NextUiSwitch = Template.bind({});

NextUiSwitch.args = {
  checked: true,
  disabled: false,
  squared: false,
  bordered: false,
  size: "md",
};
