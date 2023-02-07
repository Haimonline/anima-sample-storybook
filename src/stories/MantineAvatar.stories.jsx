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
  src: "https://avatars.githubusercontent.com/u/25126241?v=4",

  radius: "xl",
};
