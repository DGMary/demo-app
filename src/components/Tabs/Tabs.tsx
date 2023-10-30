import { Tabs, AppShell, Header } from '@mantine/core';
import HeaderComponent from '../Header/Header';
import styled from '@emotion/styled'
import TabContent from './TabContent';

const StyledTabs = styled(Tabs)`
  .mantine-Tabs-panel {
    height: 100%;
    background: lightblue;
    padding: 24px 16px 0;
  }

  & .mantine-Tabs-tab {
    margin: 0;
  }

  & .mantine-AppShell-main {
    padding-top: 50px;
  }
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