import {gql} from '@apollo/client'

export const SET_CHARACTERS = gql`
query CharactersByIds($id: ID!){
    charactersByIds(ids: $id){
    name
    status
    species
    gender
    location {
      name
    }
  }
}
`