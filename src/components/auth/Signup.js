import React, {useState, useEffect} from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/slices/users';
import { useHistory } from 'react-router';
import './auth.css'

const Signup = () => {
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [errMsg, setErrMsg] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    let history = useHistory();
    const {isAuthenticated, error} = useSelector(state => state.users)
    const dispatch = useDispatch();

    const toggleType =()=> {
        setShowPassword(!showPassword)
    }

    const formValidation =(e)=> {
        e.preventDefault()
        // Empty fields
        if (!fullname) {
            setErrMsg({name: "Field cannot be empty"})
            return
        }
        if (!email) {
            setErrMsg({email: "Field cannot be empty"})
            return
        }
        if (!password) {
            setErrMsg({password: "Field cannot be empty"})
            return
        }
        if (!confirmedPassword) {
            setErrMsg({password: "Field cannot be empty"})
            return
        }
        //Password match
        if(password.toLowerCase() !== confirmedPassword.toLowerCase()){
            setErrMsg({password: "Passwords do not match"})
            return
        }

        handleSubmit()
    }


    const handleSubmit =()=> { 
        const newUser = {
            fullName: fullname,
            email: email,
            password: password
        }
        dispatch(registerUser(newUser))

    }


    useEffect(()=> {
        if(isAuthenticated) history.push('/')
    }, [history, isAuthenticated])

    return (
        <div className='auth'>
            
            <div className='welcome'>
                <header>
                    <div className='logo'><span className='lg'>i</span>Blog</div>
                    <h1>Welcome</h1>
                    <span className='remove'><p>Join us and have more fun and experience</p></span>
                </header>
                <span className='remove'>
                <ul>
                   <li>Like posts you like</li> 
                   <li>Comment on posts</li> 
                   <li>Interract with posts</li> 
                </ul>
                </span>
            </div>
            
            <div className='form-div'>
                <h3>Sign Up</h3>
                <form className='sign-up-form' onSubmit={formValidation}>
                    <label htmlFor='name'>Full Name:</label>
                    <input type='text' value={fullname} onChange={(e) => setFullname(e.target.value)} />
                    <div className='errMsg'>{errMsg.name}</div>

                    <label htmlFor='email'>Email:</label> <br />
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div className='errMsg'>{errMsg.email}</div>

                    <label htmlFor='password'>Password</label> <br />
                    <input 
                        type= {showPassword? ('text') : ('password')}
                        value={password} 
                        onChange={(e) => setPassword( e.target.value )} 
                    />
                    {showPassword ? (
                        <FaEyeSlash className='eye' onClick={toggleType} />
                    ) : ( 
                        <FaEye className='eye' onClick={toggleType} />
                     )}
                     <div className='errMsg'>{errMsg.password}</div>
                    
                    <label htmlFor='confirm password'>Confirm Password</label> <br />
                    <input 
                        type= {showPassword? ('text') : ('password')} 
                        value={confirmedPassword} 
                        onChange={(e) => setConfirmedPassword( e.target.value )} 
                    />
                    {showPassword ? (
                        <FaEyeSlash className='eye' onClick={toggleType} />
                    ) : ( 
                        <FaEye className='eye' onClick={toggleType} />
                     )}
                    <div className='errMsg'>{errMsg.password}</div>
                    {error ? (<p className='errMsg' >{error.msg}</p>) : ('')}
                    
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup
