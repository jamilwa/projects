import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import axios from 'axios';

export const RegistrationPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    
    const [email, setEmail] = useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [isValid, setIsValid] = useState(false);
    const [isValid1, setIsValid1] = useState(false);
    const [isValid2, setIsValid2] = useState(false);
    const [message, setMessage] = useState('');
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');
    const history = useHistory();

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    const emailValidation = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
        if (regEx.test(email)) {
            setIsValid(true);
          setMessage("Email is valid.");
        } else {
            setIsValid(false);
          setMessage("Please enter a valid email.");
        }
      };

      const passwordValidation = (e) => {
          e.preventDefault();
          setPassword(e.target.value);
          if(validator.isStrongPassword(password, {
              minLength: 8, minLowercase: 1,
              minUppercase: 1, minNumbers: 1, minSymbols: 1
          })) {
              setIsValid1(true);
              setMessage1('This is a strong password.')
          } else {
              setIsValid1(false);
              setMessage1('Minimum 8 characters, an Upper case leter, a numeral and a symbol.')
          }
      };

      const confirmPasswordValidation = (e) => {
        setConfirmPassword(e.target.value);
        if(validator.isStrongPassword(confirmPassword, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setIsValid2(true);
            setMessage2('')
        } else {
            setIsValid2(false);
            setMessage2('')
        }
    };

    const onRegisterClicked = async () => {
        await axios.post('http://localhost:8080/user', {
            email: email,
            password: password
      })
      .then(resp => {
        history.push('/');
        console.log('Success', resp);
      })
      .catch(function (error) {
        setErrorMessage("User is already registered!", error);
    });
      
    }

    return(

        <div className="content-container">
            <h1 style={{color:"green", fontSize: "23px", textAlign: "center", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}>Create an account</h1>
                {errorMessage && <div className="fail" style={{color: "red"}}>{errorMessage}</div>}
            <input
                id="userName-input"
                value={email}
                onChange={emailValidation}
                placeholder="enter your email" />

                <div className={`message ${isValid ? 'success' : 'error'}`}>
                    {message}
                </div>

            <input
                type="password"
                value={password}
                onChange={passwordValidation}
                placeholder="enter your password" />

                <div className={`message ${isValid1 ? 'success' : 'error'}`}>
                    {message1}
                </div>

            <input
                type="password"
                value={confirmPassword}
                onChange={confirmPasswordValidation}
                placeholder="confirm your password" />

                <div className={`message ${isValid2 ? 'success' : 'error'}`}>
                    {message2}
                </div>

                <hr />
                <button id="btn-register" className="ui animated button" tableindex="0"
                    disabled={!password || !isValid || !isValid1 || !isValid2 || password !== confirmPassword}
                    onClick={()=>onRegisterClicked()}>
                    <div className="visible content">Register</div>
                    <div className="hidden content">
                        <i className="chevron right icon"></i>
                    </div>
                </button>

                <hr />
                <button className="ui animated button" tableindex="0" onClick={() => history.push('/')}>
                    <div className="visible content">Already have an account? Log in here</div>
                    <div className="hidden content">
                        <i className="chevron circle right icon"></i>
                    </div>
                </button>

        </div>
    )
}
