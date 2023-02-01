import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

import CharacterCard from '../components/CharacterCard'

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      origin {
        name
      }
      location {
        name
      }
    }
  }
`

const DetailPage = () => {
  const { id } = useParams()
  const optpions = {
    variables: { id }
  }
  const { data, loading, error } = useQuery(GET_CHARACTER, optpions)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...</h1>

  return(
    <div>
      <h1>Detail Page</h1>
      {
        data ? (
          <div>
            <CharacterCard character={data.character} />
            <button> Get more Info </button>
          </div>
        ): null
      }
    </div>
  )
}

export default DetailPage
