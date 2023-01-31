import { gql, useQuery } from '@apollo/client';

const CATEGORIES = {
  DOG: '🐶',
  CAT: '🐱',
  RABBIT: '🐰',
  STINGRAY: '🐳',
}

const ALL_PETS = gql`
  query GetAllPets($category: PetCategory $status: PetStatus) {
    allPets (category: $category status: $status) {
      id
      name
      category
      status
      weight
    }
    totalPets
  }
`

const AllPets = (props) => {
  const { category, status } = props;
  const options = {
    variables: {
      category,
      status
    }
  }
  const { loading, error, data } = useQuery(ALL_PETS, options)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <ul>
      {
        data.allPets.map(pet => (
          <li key={pet.id}>
            <strong>
              {CATEGORIES[pet.category]} {pet.name}
            </strong> : {pet.weight} kg
          </li>
        ))
      }
    </ul>
  )
}

export default AllPets;
