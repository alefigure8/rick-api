import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import Nav from './components/Nav'
import Page from './components/Page'
import CharacterProvider from './context/CharacterContext'

function App() {
  return (
    <CharacterProvider>
      <ChakraProvider>
          <div className='bg-zinc-500 h-screen'>
            <Nav />
            <Page />
          </div>
      </ChakraProvider>
    </CharacterProvider>
  )
}

export default App;
