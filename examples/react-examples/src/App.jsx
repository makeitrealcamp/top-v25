import Hello from './componets/Hello'
import Wrap from './componets/Wrap'


import './App.css'

function App() {
  const saludo = "Hola Mundo"
  const hobbies = ["Leer", "Cocinar", "Dormir"]

  const handleSubmit = (e) => {}

  const handleChange = (e) => {}

  const handleBlurValidate = (e) => {}

  const handleClick = () => { alert('Hola mundo')}

  return (
    <div className="App">
      <button onClick={handleClick}>
        click me
      </button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} onBlur={handleBlurValidate} />
      </form>
    </div>
  )
}

export default App
