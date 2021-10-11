import React from 'react'
import { logout } from '../../redux/slices/users'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


const Logout = () => {
    const dispatch = useDispatch()
    return (
        <div className='log-out'>
            <Link to="#" onClick={()=>dispatch(logout())}>LOG OUT</Link>
            <Link className='visit-admin' to='/admin'>Visit Dashboard</Link>
        </div>
    )
}

export default Logout
