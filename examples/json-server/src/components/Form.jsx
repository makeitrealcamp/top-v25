
const Form = () => {
  return(
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter name" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter password" />
      </div>

      <div>
        <label htmlFor="role">Role</label>
        <select name="role" id="role">
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <div>
        <button type="submit">Crear</button>
      </div>
    </form>
  )
}

export default Form
