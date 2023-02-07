import React from "react";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from '@mui/material/Button';

export default {
  title: "Material UI/Menu",
  component: MenuList,
  argTypes: {
    items: { control: "array" },
  },
};

const Template = (args) => {
  // There is another option Menu component, which is a bit harder to control with args.open
  // and needs anchor element to be controlled
  return (
    <div>
      <Button>Toggle</Button>
      {args.open && <Paper style={{maxWidth: 120}}>
        <MenuList>
          {args.items.map((item) => {
            return (
              <MenuItem key={item}>{item}</MenuItem>
            );
          })}
        </MenuList>
      </Paper>}
    </div>
  );
}

export const MuiMenu = Template.bind({});

MuiMenu.args = {
  open: true,
  label: "Dashboard",
  items: ["Profile", "My account", "Logout"],
};