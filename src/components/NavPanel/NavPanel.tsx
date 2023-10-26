import { ActionIcon, Grid } from '@mantine/core'
import { IconAdjustmentsHorizontal, IconSearch } from '@tabler/icons-react'
import { Avatar } from '@mantine/core'

function NavPanel() {
  return (
    <Grid
      align="center"
      sx={{flexWrap: "nowrap"}}
      m={0}
    >
      <Grid.Col span="content"> 
        <ActionIcon variant="transparent">
          <IconSearch />
        </ActionIcon>
      </Grid.Col>
      <Grid.Col span="content"> 
        <ActionIcon variant="transparent" >
          <IconAdjustmentsHorizontal />
        </ActionIcon>
      </Grid.Col>
      <Grid.Col span="content"> 
        <ActionIcon variant="transparent">
          <Avatar size="1.5rem" src="avatar.png" alt="Avatar" />
        </ActionIcon>
      </Grid.Col>
    </Grid>
  )
}

export default NavPanel
