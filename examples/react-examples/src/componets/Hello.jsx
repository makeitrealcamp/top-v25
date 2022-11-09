import PropTypes from 'prop-types';

import SayHello from "./SayHello"
import Hobby from "./Hobby"

const Hello = (props) => {
  const saludo = "que mas pues"
  return(
    <div>
      <h1>
        {props.title}
      </h1>
      <SayHello greeting={props.saludo} />

      <button onClick={() => { props.handleGreeting(saludo)}}>
        Saludar 👋🏻
      </button>

      <h4>Hobbies</h4>
      {
        props.hobbies.map((hobby, idx) => {
          return <Hobby key={idx} title={hobby} />
        })
      }
    </div>
  )
}


Hello.propTypes = {
  title: PropTypes.string.isRequired,
  saludo: PropTypes.string,
  age: PropTypes.number,
  isFullTime: PropTypes.bool,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  handleGreeting: PropTypes.func.isRequired,
}

Hello.defaultProps = {
  saludo: 'Entonces que mi pez',
  age: 0,
  isFullTime: true,
  hobbies: [],
}

export default Hello
