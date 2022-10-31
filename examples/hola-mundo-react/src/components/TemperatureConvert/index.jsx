import { useState } from 'react'

const TemperatureConvert = () => {
  const [degrees, setDegrees] = useState(0)
  const [scale, setType] = useState('kelvin')

  const [result, setResult] = useState(0)

  const handleChange = (event) => {
    const { value, name } = event.target
    if (name === 'degrees') {
      setDegrees(value)
    } else {
      setType(value)
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    if (scale === 'kelvin') {
      setResult(degrees - 273.15)
    } else {
      setResult(Number(degrees) + 273.15)
    }
  }


  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="degrees" onChange={handleChange} required />

        <select name="type" onChange={handleChange}>
          <option value="kelvin">Kelvin</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>

        <button type="submit">
          Convert
        </button>
      </form>

      <h2>Result {Math.floor(result)}</h2>
    </>
  )
}

export default TemperatureConvert
