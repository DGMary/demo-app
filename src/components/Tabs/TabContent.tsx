import { Grid } from '@mantine/core'
import styled from '@emotion/styled'
import Card from '../Card/Card';

const StyledGridCol = styled(Grid.Col)`
  // min-width: calc(100vw / 2);
  // max-width: calc(100vw / 5);
  background: lightgrey;

  // & (max-width: 75em) {
  //   border: 5px solid red;
  // }
`;


function TabContent() {
  return (
    <Grid sx={{ flexWrap: "nowrap", gap: '16px', padding: "24px 16px", margin: 0, height: "100%" }}>
      <StyledGridCol xs={6} sm={5} md={4} lg={3} xl={2}>
        <div>1</div>
      </StyledGridCol>
      <StyledGridCol xs={6} sm={5} md={4} lg={3} xl={2}>
        <Card/>
      </StyledGridCol>
      <StyledGridCol xs={6} sm={5} md={4} lg={3} xl={2}>3</StyledGridCol>
      {/* <StyledGridCol xs={6} sm={5} md={4} lg={3} xl={2}>4</StyledGridCol>
      <StyledGridCol xs={6} sm={5} md={4} lg={3} xl={2}>5</StyledGridCol>
      <StyledGridCol xs={6} sm={5} md={4} lg={3} xl={2}>6</StyledGridCol> */}
    </Grid>
  );
}

export default TabContent