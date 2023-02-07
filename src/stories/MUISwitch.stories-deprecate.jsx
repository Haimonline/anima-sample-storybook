import React from "react";
import Switch from "@mui/material/Switch";

export default {
  title: "Material UI/Switch",
  component: Switch,
  argTypes: {
    checked: { type: "boolean" },
    disabled: { type: "boolean" },
  },
};

const Template = (args) => <Switch {...args} />;
export const MuiSwitch = Template.bind({});

MuiSwitch.args = {
  checked: true,
  disabled: false,
};
