import { Container } from '@chakra-ui/react'
import { useContext } from 'react'
import {CharacterContext} from '../context/CharacterContext'

const Page = () => {

    const {getCharacters} = useContext(CharacterContext)

    console.log(getCharacters)

    return (
        <div className='bg-zinc-500'>
            <Container maxW='container.xl' minH='4xl' >
                {getCharacters.map(some => (<p key={some.name}>{some.name}</p>))}
            </Container>
        </div>
    )
}

export default Page
