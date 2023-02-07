import React from "react";
import { Avatar } from "@mantine/core";

export default {
  title: "Mantine/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      description: "Size",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    src: { description: "src", type: "string" },
    radius: {
      description: "Radius",
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

const Template = (args) => <Avatar {...args} />;
export const MantineAvatar = Template.bind({});
MantineAvatar.args = {
  size: "md",
  src: "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
  radius: "xl",
};
