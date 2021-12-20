import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import Nav from './components/Nav'
import Page from './components/Page'
import CharacterProvider from './context/CharacterContext'

function App() {
  return (
    <CharacterProvider>
      <ChakraProvider>
        
            <Nav />
            <Page />
        
      </ChakraProvider>
    </CharacterProvider>
  )
}

export default App;
