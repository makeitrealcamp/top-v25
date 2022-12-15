import { useState } from 'react'

const Upload = () => {
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)

  const handleChange = ({ target }) => {
    const { files } = target
    const file = files[0]
    console.log("🚀 ~ file: Upload.jsx:10 ~ handleChange ~ file", file)
    setFile(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('file', file)
    formData.append('fileName', file.name)

    const options = {
      method: 'POST',
      body: formData
    }

    const url = 'http://localhost:8080/api/upload'

    const response = await fetch(url, options)
    const data = await response.json()
    setImg(data.url)
  }

  return(
    <div>
      <h1>Upload Files</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChange}
            accept="image/*"
          />
        </label>

        <button type="submit">Subir Imagen</button>
      </form>

      <br />
      <br />

      {img ? <img src={img} alt="img" /> : null}
    </div>
  )
}

export default Upload
