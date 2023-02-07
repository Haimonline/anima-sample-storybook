import React from "react";

//import all icons from @tabler/icons-reac
import {
  IconHeart,
  IconBookmark,
  IconShare,
  IconPencil,
  IconTrash,
  IconAlertCircle,
  IconAlertOctagon,
  IconAlertTriangle,
  IconInfoCircle,
  IconX,
} from "@tabler/icons-react";

//create a story for each ico
export default {
  title: "Tabler Icons/Icon",
  argTypes: {
    size: {
      description: "Size",
      control: { type: "select" },
      options: [16, 20, 24, 28],
    },
  },
};

const icons = [
  { component: IconHeart, name: "Heart" },
  { component: IconBookmark, name: "Bookmark" },
  { component: IconShare, name: "Share" },
  { component: IconPencil, name: "Pencil" },
  { component: IconTrash, name: "Trash" },
  { component: IconAlertCircle, name: "AlertCircle" },
  { component: IconAlertOctagon, name: "AlertOctagon" },
  { component: IconAlertTriangle, name: "AlertTriangle" },
  { component: IconInfoCircle, name: "InfoCircle" },
  { component: IconX, name: "X" },
];

const createStory = (icon) => {
  const Template = (args) => <icon.component {...args} />;
  const story = Template.bind({});
  story.args = {
    size: 16,
  };
  return { [icon.name]: story };
};

export const { Heart, Bookmark, Share, Pencil, Trash } = icons.reduce(
  (acc, icon) => ({ ...acc, ...createStory(icon) }),
  {}
);
