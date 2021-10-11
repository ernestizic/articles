import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import Avatar from '../../images/Arh-avatar.jpg'
import { AiFillDashboard } from 'react-icons/ai';
import { RiPagesLine } from 'react-icons/ri';
import { MdWidgets } from 'react-icons/md';
import {  useSelector } from 'react-redux'
import './Dashboard.css'

const Dashboard = ({children}) => {
    const {fullName} = useSelector(state => state.users.user)
    return (
        <div className='dashboard'>
            <div className='admin-navbar'>
                <div className='logo-div'>
                    <Link className='navbar-brand' to='/'>
                        <span className='lg'>i</span>Blog
                    </Link>
                </div>
                <ul>
                    <li className='name'>Welcome, {fullName}</li>
                    <li><img src={Avatar} alt="Avatar" className="avatar" /></li>
                </ul>
            </div>
            <div className='sidenav'>
                <ul>
                    <li><NavLink to='/admin'> <span className='icon'><AiFillDashboard/></span>  <span className='i-link'>Dashboard</span></NavLink></li>
                    <li><NavLink to='/admins/articles'> <span className='icon'><RiPagesLine /></span> <span className='i-link'>Articles</span></NavLink></li>
                    <li><NavLink to='/admins/widget'> <span className='icon'><MdWidgets /></span> <span className='i-link'>Widget</span></NavLink></li>
                </ul>
            </div>

            <div className='main'>
                {children}
            </div>
        </div>
    )
}


export default Dashboard
