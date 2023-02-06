import React from "react";

import Button from "@mui/material/Button";

export default {
  title: "Material UI/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select", options: ["outlined", "contained"] },
    },
    color: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "error",
          "info",
          "warning",
        ],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    disabled: { type: "boolean" },
  },
};

const Template = (args) => <Button {...args}>{args.label}</Button>;

export const MuiButton = Template.bind({});
MuiButton.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  disabled: false,
};
