import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default {
  title: "Material UI/Card",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select", options: ["outline", "elevation"] },
    },
  },
};

const Template = (args) => (
  <Card variant={args.variant} sx={{ maxWidth: 345 }}>
    {args.header && (
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={args.image}
      />
    )}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {args.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {args.content}
      </Typography>
    </CardContent>
    {args.footer && (
      <CardActions>
        <Button size="small" variant="contained">
          Share
        </Button>
        <Button size="small" variant="outlined">
          Learn More
        </Button>
      </CardActions>
    )}
  </Card>
);

export const MuiCard = Template.bind({});

MuiCard.args = {
  title: "Lizard",
  content:
    "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  variant: "elevation",
  footer: true,
  image:
    "https://images.unsplash.com/photo-1546557036-57b741df8f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  header: true,
};
