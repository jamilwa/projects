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
        //console.log(res.data.token)
        if(res.data.token){
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('email', username)
          console.log(localStorage.getItem('email'));
        }
        console.log(localStorage.getItem('token'))
        history.push('/add')
            })
    .catch(function (error) {
        setErrorMessage("Please check your entries and try again!");
    });
      
    }

    return(
        <div className="content-container">
            <h1>Login</h1>
            {errorMessage && <div className="fail" style={{color: "red"}}>{errorMessage}</div>}
            <input
                value={username}
                onChange={usernamelValidation}
                placeholder="username" />
                <div className={`message ${isValid ? 'success' : 'error'}`}>
                    {message}
                </div>
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="password" />
                <button
                    disabled={!username || !password || !isValid}
                    onClick={()=>onLoginClicked()}>Log In</button>
                    <hr />
                <button onClick={() => history.push('/registration')}>Don't have an account? Register here</button>
                

        </div>
    )
}