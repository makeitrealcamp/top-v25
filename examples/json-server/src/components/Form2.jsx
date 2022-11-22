import { useState } from 'react'

import useForm from '../hooks/useForm'

const Form2 = () => {
  const {form, handleChange} = useForm({})

  return(
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>
      <div>
        <label htmlFor="salary">salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          onChange={handleChange}
          placeholder="Enter salary"
        />
      </div>
    </form>
  )
}

export default Form2
