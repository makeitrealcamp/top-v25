
const cities = [
  'Buenos Aires',
  'Bogota',
  'Lima',
  'Barranquilla',
  'Santiago',
  'Caracas',
  'Quito',
]

const Destiny = (props) => {
  const handleChange = (e) => {
    const value = e.currentTarget.value
    alert(`Vas a viajar a ${value}`)
  }

  return(
    <div>
      <h2>Destinos</h2>
      <select name="destiny" onChange={handleChange}>
        {cities.map((city, index) => {
          return <option key={index} value={city}>{city}</option>
        })}
      </select>
    </div>
  )
}

export default Destiny
