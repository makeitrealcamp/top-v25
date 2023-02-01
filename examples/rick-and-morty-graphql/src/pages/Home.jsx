import { useQuery, gql } from '@apollo/client';

import CharacterCard from '../components/CharacterCard'

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
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
  }
`

const HomePage = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS)

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error...</h1>

  return(
    <>
      <h1>Home Page</h1>
      <div className="parent">
        {
          data.characters.results.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))
        }
      </div>
    </>
  )
}

export default HomePage
