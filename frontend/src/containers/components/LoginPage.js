import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const LoginPage = () => {
    
    const [errorMessage, setErrorMessage] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] =useState('');
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState('');

    const history = useHistory();

    const regEx1 = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    function checkLogin() {
        if(localStorage.getItem('email')){
            history.push('/idealisting')
        }
    }
    checkLogin();

    const usernamelValidation = (e) => {
       
        setUsername(e.target.value);
        if (regEx1.test(username)) {
            setIsValid(true);
          setMessage("");
        } else {
            setIsValid(false);
          setMessage("Enter a valid username.");
        }
      };


    const onLoginClicked = async () => {
        await axios.post('http://localhost:8090/login', {
        username: username,
        password: password
      })
      .then(res => {

        if(res.data.token){
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('email', username)
          console.log(localStorage.getItem('email'));
        }
        console.log(localStorage.getItem('token'))
        history.push('/idealisting')
            })
    // .catch(function (error) {
    //     setErrorMessage("Please check your entries and try again!", error);
    // });
        .catch(err => {
            setErrorMessage('Error Occured! ' + err);
            localStorage.clear();
        })
      
    }

    return(
        <div className="content-container">
            <h1 style={{color:"green", fontSize: "22px", textAlign: "center", fontStyle: "-moz-initial", fontVariant: "all-petite-caps"}}>Log-in to your account</h1>
            {errorMessage && <div className="fail" style={{color: "red"}}>{errorMessage}</div>}
            <input
                id='input-username'
                value={username}
                onChange={usernamelValidation}
                className='user icon'
                placeholder="username" />
                <div className={`message ${isValid ? 'success' : 'error'}`}>
                    {message}
                </div>
            <input
                id='input-password'
                type="password"
                value={password}
                onChange={e =>setPassword(e.target.value)}
                placeholder="password" />

                <button id='btn-primary' className="ui animated button" tableindex="0" 
                    disabled={!username || !password || !isValid}
                    onClick={()=>onLoginClicked()}>
                    <div className="visible content">Log In</div>
                    <div className="hidden content">
                    <i className="sign in alternate icon"></i></div>
                </button>
                    <hr />
                <button className="ui animated button" tableindex="0" onClick={() => history.push('/registration')}>
                <div className="visible content">Don't have an account? Register here</div>
                <div className="hidden content">
                    <i className="chevron circle left icon"></i></div>
                </button>
                

        </div>
    )
}

