import { MantineProvider } from '@mantine/core'
import Header from './components/Header/Header'
import Tabs from './components/Tabs/Tabs'
import './App.css'

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Header />
      <Tabs />
    </MantineProvider>
  )
}

export default App
