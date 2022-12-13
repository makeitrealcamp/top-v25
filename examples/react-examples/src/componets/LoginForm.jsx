

const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault()

    const formData = new FormData(evt.target)
    const data = Object.fromEntries(formData)

    console.log(data)
  }

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
