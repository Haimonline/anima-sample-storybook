import React from "react";
import { Alert } from "@mantine/core";
import {
  IconAlertCircle,
  IconAlertOctagon,
  IconAlertTriangle,
  IconInfoCircle,
} from "@tabler/icons-react";

const iconOptions = [
  "alert-circle",
  "alert-octagon",
  "alert-triangle",
  "info-circle",
];

const Icon = ({ iconName }) => {
  let IconComponent;
  switch (iconName) {
    case "alert-circle":
      IconComponent = IconAlertCircle;
      break;
    case "alert-octagon":
      IconComponent = IconAlertOctagon;
      break;
    case "alert-triangle":
      IconComponent = IconAlertTriangle;
      break;
    case "info-circle":
      IconComponent = IconInfoCircle;
      break;
    default:
      IconComponent = null;
  }
  return IconComponent ? <IconComponent /> : null;
};

export default {
  title: "Mantine/Alert",
  component: Alert,
  argTypes: {
    title: { description: "Title", type: "string" },
    iconName: {
      control: { type: "select" },
      options: iconOptions,
      description: "Icon",
      required: false,
    },
    description: { description: "Description", type: "string" },
    color: {
      description: "Color",
      control: { type: "select" },
      options: ["gray", "red", "indigo", "blue", "green", "orange"],
    },
  },
};

const Template = (args) => (
  <Alert {...args} variant="light" icon={<Icon iconName={args.iconName} />}>
    {args.description}
  </Alert>
);
export const MantineAlert = Template.bind({});
MantineAlert.args = {
  title: "Alert",
  iconName: "info-circle",
  description: "Description",
  color: "blue",
};
