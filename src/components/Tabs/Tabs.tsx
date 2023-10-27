import { Tabs, AppShell, Header } from '@mantine/core';
import HeaderComponent from '../Header/Header';
import styled from '@emotion/styled'
import TabContent from './TabContent';

const StyledTabs = styled(Tabs)`
  .mantine-Tabs-panel {
    height: 100%;
    background: lightblue;
    overflow: auto;
  }

  & .mantine-Tabs-tab {
    border: none;
  }

  & .mantine-Tabs-tab[data-active] {
    background-color: white;
    .mantine-Tabs-tabLabel:after {
      content: none;
    }
  }

  & .mantine-AppShell-main {
    padding-top: 50px;
  }
  // & .mantine-ScrollArea-root {
  //   min-height: calc(100vh - 66px);
  // }
`;

function TabsComponent() {
  return (
    <StyledTabs defaultValue="first">
      <AppShell
        padding="0"
        header={<Header height={50}>{<HeaderComponent />}</Header>}
      >    
        <Tabs.Panel value="first">
          <TabContent />
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