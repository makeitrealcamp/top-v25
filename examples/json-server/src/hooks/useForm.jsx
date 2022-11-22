import { useState } from "react";

const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue)

  const handleChange = ({ target }) => {
    const { value, name } = target
    setForm({ ...form, [name]: value })
  }

  return {
    form,
    handleChange,
  }

  // return [
  //   form,
  //   handleChange,
  // ]
}


export default useForm

