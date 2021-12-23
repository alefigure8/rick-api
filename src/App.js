import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Page from './components/Page'
import CharacterProvider from './context/CharacterContext'

function App() {
  return (
    <CharacterProvider>
      <ChakraProvider>
          <div className='bg-zinc-500 md:h-screen'>
            <Nav />
            <Page />
            <Footer/>
          </div>
      </ChakraProvider>
    </CharacterProvider>
  )
}

export default App;
