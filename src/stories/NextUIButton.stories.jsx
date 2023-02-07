import React from "react";
import { Button } from "@nextui-org/react";

export default {
  title: "Next UI/Button",
  component: Button,
  argTypes: {
    disabled: { type: "boolean" },
    rounded: { type: "boolean" },
    bordered: { type: "boolean" },
    flat: { type: "boolean" },
    auto: { type: "boolean", name: "auto width" },
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

const Template = (args) => <Button {...args}>{args.label}</Button>;
export const NextUiButton = Template.bind({});

NextUiButton.args = {
  disabled: false,
  rounded: false,
  bordered: false,
  flat: false,
  auto: true,
  size: "md",
  label: "Button",
};
