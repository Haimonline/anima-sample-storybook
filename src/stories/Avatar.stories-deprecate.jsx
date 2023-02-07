import React from "react";
import Avatar from "@mui/material/Avatar";

export default {
  title: "Material UI/Avatar",
  component: Avatar,
  argTypes: {
  },
};

const Template = (args) => <Avatar sx={{ bgcolor: args.bgColor }} src={!args.lettered ? args.src : null}>{args.letter}</Avatar>;
export const MuiAvatar = Template.bind({});

MuiAvatar.args = {
  src: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  letter: 'B',
  bgColor: 'red',
  lettered: false,
};
