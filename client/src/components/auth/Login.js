import React, {useState}from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    //State for Login

    const [user, saveUser] = useState({
        email: '',
        password: '',
    });

    //Exatract from user
    const { email, password } = user;

    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //When user wants to login
    const onSubmit = e => {
        e.preventDefault();

        //Validate empty inputs

        //Pass to action
    }

    return (  <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
            <h1>Login</h1>
            <form 
            onSubmit={onSubmit}
            >
                <div className='campo-form'>
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                    id='email'
                    name='email'
                    placeholder='Email'
                    value = { email }
                    onChange={onChange}/>
                </div>

                <div className='campo-form'>
                    <label htmlFor='password'>Password</label>
                    <input type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    value={ password }
                    onChange={onChange}/>
                </div>

                <div className='campo-form'>
                    <input type="submit"
                    className='btn btn-primario btn-block'
                    value='Login'/>
                </div>
            </form>
            <Link to={'/register'} className='enlace-cuenta'>
                Register
            </Link>
        </div>
    </div> );
}
 
export default Login;