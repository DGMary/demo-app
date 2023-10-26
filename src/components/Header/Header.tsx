import { Tabs, Grid, Container, ActionIcon } from '@mantine/core'
import Logo from '../common/Logo/Logo'
import NavPanel from '../NavPanel/NavPanel'
import { IconPlus } from '@tabler/icons-react'



function Header() {
  return (
    <Container fluid={true} px={8} sx={{background: "rgb(248, 249, 250)"}}>
      <Grid sx={{ height: "50px", display: 'flex' }} m={0}>
        <Logo/>
        <Grid.Col span="content" sx={{flex: 1}} py={0}>
          <Tabs.List sx={{ height: "100%", borderBottom: "none"}}>
            <Tabs.Tab value="first">Tab 1</Tabs.Tab>
            <Tabs.Tab value="second">Tab 2</Tabs.Tab>
            <Tabs.Tab value="third">Tab 3</Tabs.Tab>
            <ActionIcon variant="transparent" sx={{ height: "100%"}} size={"lg"}>
              <IconPlus size="1.5rem"/>
            </ActionIcon>
          </Tabs.List>
        </Grid.Col>
        <NavPanel/>
      </Grid>
    </Container>
  )
}

export default Header
