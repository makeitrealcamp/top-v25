import React from 'react'

const OnionHater = (props) => {

  const handleChange = (e) => {
    const value = e.currentTarget.value.toLowerCase()

    if (value.includes('cebolla')) {
      alert('ODIO LA CEBOLLA')
    }
  }

  return(
    <div>
      <textarea
        name="description"
        cols="30"
        rows="10"
        onChange={handleChange}
      />
    </div>
  )
}

export default OnionHater
