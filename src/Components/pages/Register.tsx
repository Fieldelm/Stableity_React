import { useEffect, useState } from 'react';
import { fetchPostDataStatus as fetchStatus } from '../utilities/Fetches';
import { useTranslation } from 'react-i18next';
import useForm from '../utilities/Form';


const Register = () => {

   //TODO : translation for error messages at row 20
   //TODO: design for form

  const { t } = useTranslation();

  let passwdPlaceholder: string = t("password");

  const [errorMsg, setErrorMsg] = useState('');

  const [status, setStatus] = useState(0);


  useEffect(() => {
    switch (status) {
      case 0:
        setErrorMsg('');
        break;
      case 200:
        setErrorMsg('Registered');
        break;
      case 409:
        setErrorMsg('Email already exist');
        break;
      default:
        setErrorMsg(`${status}`)
    }
  }, [status])
  

  const initialState: User = {
    email: "",
    password: "",
  };


  const registerUserCallback = async () => {

    const newUser: User = values as User

    console.log(`user data: ${newUser}`);

    const response = await fetchStatus('/api/register', newUser);

    setStatus(await response);


  }

  // getting the event handlers from our custom hook
  const { onChange, onSubmit, values } = useForm(
    registerUserCallback,
    initialState
  );



  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            name='email'
            id='email'
            type='email'
            placeholder='Email'
            onChange={onChange}
            required
          />

          <input
            name='password'
            id='password'
            type='password'
            placeholder={passwdPlaceholder}
            onChange={onChange}
            required
          />
          <button type='submit'>{t('Register')}</button>
        </div>
        <div className='error_message'>
          {(errorMsg !== '') ? <p>{errorMsg}</p> : <></>}
        </div>

      </form>
    </div>
    
  )
}

export default Register;