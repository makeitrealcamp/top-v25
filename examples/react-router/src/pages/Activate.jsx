import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { validateUser } from '../services/auth'

const ActivatePage = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const fetchValidateUser = async () => {
    try {
      const data = await validateUser(token);
      debugger
      console.log(data); // { token : 'some token', profile: {} }
      localStorage.setItem('token', data.token);

      navigate('/');
    } catch (error) {

    }
  }

  // useEffect(() => {


  //   fetchValidateUser();
  // }, [token])

  return (
    <div>
      <h1>El token es {token}</h1>
      <button onClick={fetchValidateUser}> Activar Cuenta</button>
    </div>
  );
}

export default ActivatePage;
