import React from 'react'
import {NavLink} from 'react-router-dom'
import Avatar from '../../images/Arh-avatar.jpg'
import { AiFillDashboard } from 'react-icons/ai';
import { RiPagesLine } from 'react-icons/ri';
import { MdWidgets } from 'react-icons/md';
import propTypes from "prop-types";
import './Dashboard.css'

const Dashboard = ({children}) => {
    return (
        <div className='dashboard'>
            <div className='admin-navbar'>
                <div className='logo-div'>
                    <h3>iBlog</h3>
                </div>
                <ul>
                    <li className='name'>Admin</li>
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

Dashboard.propTypes = {
    children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default Dashboard
