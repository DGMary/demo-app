import { Tabs, AppShell, Header } from '@mantine/core';
import HeaderComponent from '../Header/Header';
import styled from '@emotion/styled'

const StyledTabs = styled(Tabs)`
  cursor: pointer;
  & .mantine-Tabs-tab {
    border: none;
    &:hover {
      backgroun-color: inherit;
    }
  }
  & .mantine-Tabs-tabLabel {
    padding: 4px 0;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      width: 1px;
      height: 120%;
      background: #ced4da;
      top: -2px;
      right: -17px
    }
  }

  & .mantine-Tabs-tab[data-active] {
    background-color: white;
    .mantine-Tabs-tabLabel:after {
      content: none;
    }
  }
`;

function TabsComponent() {
  return (
    <StyledTabs defaultValue="first">
      <AppShell
        padding="md"
        header={<Header height={50}>{<HeaderComponent />}</Header>}
      >          

      <Tabs.Panel value="first">
        Tab Content 1
      </Tabs.Panel>

      <Tabs.Panel value="second">
        Tab Content 2
      </Tabs.Panel>

      <Tabs.Panel value="third">
        Tab Content 3
      </Tabs.Panel>
    </AppShell>
    </StyledTabs>
  );
}

export default TabsComponent