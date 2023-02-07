import React from "react";
import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  MantineProvider,
} from "@mantine/core";
import { IconHeart, IconBookmark, IconShare } from "@tabler/icons-react";

const attributes = {
  props: {
    image:
      "https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    category: "decorations",
    title: "Top 50 underrated plants for house decoration",
    footer: "733 people liked this",
    author: {
      name: "Elsa Gardenowl",
      description: "posted 34 minutes ago",
      image:
        "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    },
  },
};

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

function ArticleCard({
  image,
  category,
  title,
  footer,
  author,
  hasImage = true,
  hasFooter = true,
  hasAuthor = true,
}) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="lg" radius="md" className={classes.card}>
      {hasImage && (
        <Card.Section mb="sm">
          <Image src={image} alt={title} height={180} />
        </Card.Section>
      )}
      <Badge>{category}</Badge>

      <Text weight={700} className={classes.title} mt="xs">
        {title}
      </Text>

      {hasAuthor && (
        <Group mt="lg">
          <Avatar src={author.image} radius="sm" />
          <div>
            <Text weight={500}>{author.name}</Text>
            <Text size="xs" color="dimmed">
              {author.description}
            </Text>
          </div>
        </Group>
      )}

      {hasFooter && (
        <Card.Section className={classes.footer}>
          <Group position="apart">
            <Text size="xs" color="dimmed">
              {footer}
            </Text>
            <Group spacing={0}>
              <ActionIcon>
                <IconHeart size={18} color={theme.colors.red[6]} stroke={1.5} />
              </ActionIcon>
              <ActionIcon>
                <IconBookmark
                  size={18}
                  color={theme.colors.yellow[6]}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon>
                <IconShare
                  size={16}
                  color={theme.colors.blue[6]}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Group>
        </Card.Section>
      )}
    </Card>
  );
}

export default {
  title: "Mantine/Card",
  component: ArticleCard,
  argTypes: {
    hasImage: { type: "boolean" },
    hasFooter: { type: "boolean" },
    hasAuthor: { type: "boolean" },
  },
};

const Template = (args) => (
  <MantineProvider
    theme={{
      headings: { fontFamily: "Greycliff CF, sans-serif" },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <ArticleCard {...args}>{args.label}</ArticleCard>
  </MantineProvider>
);

export const MantineCard = Template.bind({});
MantineCard.args = {
  ...attributes.props,
  hasImage: true,
  hasFooter: true,
  hasAuthor: true,
};
