import React from "react";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import CheckCircle from "@mui/icons-material/CheckCircle";

export default {
  title: "Material UI/Alert",
  component: Alert,
  argTypes: {
    severity: {
      control: {
        type: "select",
        options: ["error", "info", "warning", "success"],
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["CheckCircle", "CheckCircleOutline"],
      },
    },
  },
};

const icons = {
  CheckCircleOutline,
  CheckCircle,
};

const Icon = (props) => {
  const IconComponent = icons[props.name];
  return <IconComponent fontSize="inherit" />;
};

const Template = (args) => {
  return (
    <Alert
      severity={args.severity}
      icon={<Icon name={args.icon} fontSize="inherit" />}
      action={
        args.action && (
          <Button color="inherit" size="small">
            UNDO
          </Button>
        )
      }
    >
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
  );
};

export const MuiAlert = Template.bind({});

MuiAlert.args = {
  title: "Error",
  severity: "error",
  icon: "CheckCircle",
  action: true,
};
