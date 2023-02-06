import React from "react";
import { Pagination } from "@nextui-org/react";

export default {
  title: "Next UI/Pagination",
  component: Pagination,
  argTypes: {
    onlyDots: { type: "boolean" },
    rounded: { type: "boolean" },
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
    initialPage: {
      control: {
        type: "number",
      },
    },
    total: {
      control: {
        type: "number",
      },
    },
  },
};

const Template = (args) => <Pagination {...args} />;
export const NextUiPagination = Template.bind({});

NextUiPagination.args = {
  rounded: false,
  onlyDots: false,
  size: "md",
  initialPage: 1,
  total: 10,
};
