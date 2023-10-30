import { Card, Group, Text, Menu, ActionIcon, Image, List, rem, Anchor } from '@mantine/core';
import styled from '@emotion/styled'
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';
import viteLogo from '/vite.svg'
import dataList from './dataList.json';

const StyledListItem = styled(List.Item)`
  & .mantine-Anchor-root:hover {
    text-decoration: none;
  }
`;

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
          icon={<Image src={viteLogo} height={24} width={24} alt="No image Logo link"/>}
        >
          {dataList.map((item) => (
            <StyledListItem key={item.id}
              icon={item.img && <Image src={item.img} height={24} width={24} alt="Logo link" />}> 
              <Anchor href={item.href} target="_blank" color='black'>
                {item.title}
              </Anchor>
            </StyledListItem>))
          }
        </List>
      </Card.Section>
    </Card>
  );
}

export default CardItem