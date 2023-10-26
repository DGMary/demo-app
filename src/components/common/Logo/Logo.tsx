import { Image, Grid } from '@mantine/core'
import viteLogo from '/vite.svg'

function Logo() {
  return (          
    <Grid.Col span="content"> 
      <Image height={32} width={32}  src={viteLogo} alt="Logo" />
    </Grid.Col>
  )
}

export default Logo
