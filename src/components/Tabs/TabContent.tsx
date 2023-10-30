import { Grid } from '@mantine/core'
import Card from '../Card/Card';

function TabContent() {
  return (
    <Grid sx={{ flexWrap: "nowrap", gap: '16px', padding: "0 0 16px", margin: 0, height: "100%", overflow: "auto" }}>
      <Grid.Col xs={6} sm={5} md={4} lg={3} xl={2} bg="lightgrey">1
        <Card/>
        <Card/>
        <Card/>
      </Grid.Col>
      <Grid.Col xs={6} sm={5} md={4} lg={3} xl={2} bg="lightgrey">2</Grid.Col>
      <Grid.Col xs={6} sm={5} md={4} lg={3} xl={2} bg="lightgrey">3</Grid.Col>
      <Grid.Col xs={6} sm={5} md={4} lg={3} xl={2} bg="lightgrey">4</Grid.Col>
      <Grid.Col xs={6} sm={5} md={4} lg={3} xl={2} bg="lightgrey">5</Grid.Col>
      <Grid.Col xs={6} sm={5} md={4} lg={3} xl={2} bg="lightgrey">6</Grid.Col>
    </Grid>
  );
}

export default TabContent