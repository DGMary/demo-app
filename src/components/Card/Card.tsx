import { Card, Group, Text, Menu, ActionIcon, Image, List, rem } from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';
import viteLogo from '/vite.svg'

function CardItem() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon>
                <IconDots size="1rem" />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<IconFileZip size={rem(14)} />}>Download zip</Menu.Item>
              <Menu.Item icon={<IconEye size={rem(14)} />}>Preview all</Menu.Item>
              <Menu.Item icon={<IconTrash size={rem(14)} />} color="red">
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
        <Text mt="sm" color="dimmed" size="sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed autem doloribus magnam unde rem quae deserunt 
          aut accusantium architecto repellat consequuntur eum.
        </Text>
      </Card.Section>

      <Card.Section py="md" px="xs">
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <Image
              src={viteLogo}
              height={24}
              width={24}
              alt="No image Logo link"
            />
          }
        >
          <List.Item >Test text</List.Item>
          <List.Item>Install dependencies with yarn</List.Item>
          <List.Item>To start development server run npm start command</List.Item>
          <List.Item>Run tests to make sure your changes do not break the build</List.Item>
          <List.Item
            icon={            
              <Image
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                height={24}
                width={24}
                alt="Logo link"
              />
            }
          >
            Submit a pull request once you are done
          </List.Item>
        </List>
      </Card.Section>

    </Card>
  );
}

export default CardItem