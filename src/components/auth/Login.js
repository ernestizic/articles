import React, {useEffect, useState} from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/users';
import { useHistory } from 'react-router';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [err, setErr] = useState('')

    let history = useHistory();
    

    const dispatch = useDispatch()
    const {isAuthenticated, error} = useSelector(state => state.users)

    const toggleType =()=> {
        setShowPassword(!showPassword)
    }

    const validateForm =(e)=> {
        e.preventDefault();
        if (!email) {
            setErr({email: "Field cannot be empty"})
            return
        }
        if (!password) {
            setErr({password: "Field cannot be empty"})
            return
        }

        handleSubmit();
    }

    const handleSubmit =()=> {
        const user = {
            email: email,
            password: password
        }
        dispatch(login(user))
    }

    useEffect(()=> {
        if(isAuthenticated) history.push('/')

    }, [history, isAuthenticated])
    return (
        <div className='auth'>
            <form onSubmit={validateForm} className='login-form'>
                <h2>Login</h2>

                <label htmlFor='email'>Email:</label> <br />
                <input 
                    type='email' 
                    value={email} onChange={(e) => setEmail( e.target.value )} 
                    placeholder= 'Type your email'
                />
                <p className='errMsg'>{err.email}</p>

                <label htmlFor='password'>Password</label> <br />
                <input 
                    type={showPassword? ('text') : ('password')} 
                    value={password} onChange={(e) => setPassword( e.target.value )} 
                    maxLength="20"
                    placeholder= 'Type your password'
                />
                {showPassword ? (
                    <FaEyeSlash className='eye' onClick={toggleType} />
                ) : ( 
                    <FaEye className='eye' onClick={toggleType} />  
                )}
                <p className='errMsg'>{err.password}</p>
                {error ? (<p className='errMsg' >{error.msg}</p>) : ('')}

                <Link to='/' className='forgot-password'> Forgot password? </Link>

                <button type='submit' className='submit-btn'>LOGIN</button>


                <div className='social-sign'>
                    <p>Or sign up using</p>

                    <div className='social-logo'>
                        <FaFacebook className='fb' />
                        <AiFillTwitterCircle className='twitter' />
                        <AiFillGoogleCircle className='google' />
                    </div>

                    <div className='sign-up-link'>
                        <p>Or sign up using</p>
                        <Link to='/signup'>SIGN UP</Link>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Login
