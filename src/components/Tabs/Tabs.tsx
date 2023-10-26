import { Tabs } from '@mantine/core';

function TabsComponent() {
  return (
    <Tabs color="teal" defaultValue="first">
      <Tabs.List>
        <Tabs.Tab value="first">Tab 1</Tabs.Tab>
        <Tabs.Tab value="second">Tab 2</Tabs.Tab>
        <Tabs.Tab value="third">Tab 3</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first">
        Tab Content 1
      </Tabs.Panel>

      <Tabs.Panel value="second">
        Tab Content 2
      </Tabs.Panel>

      <Tabs.Panel value="third">
        Tab Content 3
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabsComponent