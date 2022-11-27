import React from "react";

import { addons, types } from "@storybook/addons";

import { SyncButton } from "./components/SyncButton";

const ADDON_ID = "Demo-Anima";
const BUTTON_ID = `${ADDON_ID}/button`;

addons.register(ADDON_ID, () => {
  addons.add(BUTTON_ID, {
    type: types.TOOL,
    title: "Demo-Anima",
    render: ({ active }) => <SyncButton active={active} />,
  });
});
