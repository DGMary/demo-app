import { MantineProvider, Text } from '@mantine/core'
import './App.css'

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Demo app!</Text>
    </MantineProvider>
  )
}

export default App