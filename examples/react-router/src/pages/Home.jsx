const HomePage = () => {
  const token = localStorage.getItem('token');
  return (
    <div>
      <h1>Home Page</h1>

      {
        token ? <h3>Welcome user</h3> : null
      }
      <p>Some content</p>
    </div>
  );
}

export default HomePage;
