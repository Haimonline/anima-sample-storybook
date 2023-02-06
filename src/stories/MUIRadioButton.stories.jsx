import React from "react";
import Radio from "@mui/material/Radio";

export default {
  title: "Material UI/Radio",
  component: Radio,
  argTypes: {
    checked: { type: "boolean" },
    disabled: { type: "boolean" },
  },
};

const Template = (args) => <Radio {...args} />;
export const MuiRadio = Template.bind({});

MuiRadio.args = {
  checked: true,
  disabled: false,
};
