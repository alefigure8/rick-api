import { ChakraProvider } from '@chakra-ui/react'
import * as React from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Page from './components/Page'

function App() {
  return (

    <ChakraProvider>
        <div className='bg-zinc-500 min-h-screen flex flex-col w-full'>
          <Nav />
          <Page />
          <Footer/>
        </div>
    </ChakraProvider>

  )
}

export default App;
