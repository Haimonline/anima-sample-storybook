import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default {
  title: "Material UI/Basic Card",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select", options: ["outline", "elevation"] },
    },
  },
};

const Template = (args) => (
  <Card {...args} sx={{ maxWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {args.content}
      </Typography>
      <Typography variant="h5" component="div">
        be-nev-o-lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    {args.footer && (
      <CardActions>
        <Button size="small" variant="contained">
          Learn More
        </Button>
      </CardActions>
    )}
  </Card>
);

export const MuiBasicCard = Template.bind({});

MuiBasicCard.args = {
  content: "Word of the Day",
  variant: "outline",
  footer: true,
};
