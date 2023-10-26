import { MantineProvider } from '@mantine/core'
import Tabs from './components/Tabs/Tabs'
import './App.css'

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Tabs />
    </MantineProvider>
  )
}

export default App
