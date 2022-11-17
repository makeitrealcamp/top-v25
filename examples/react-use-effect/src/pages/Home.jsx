import Characters from "../components/Characters";

const HomePage = () => {
  // TODO: Mostrar un mensaje cuando se desmonte el componente
  // console.log('Se desmontó el componente');


  return (
    <div className="HomePage">
      <h1>Home</h1>
      <Characters />
    </div>
  );
}

export default HomePage;
