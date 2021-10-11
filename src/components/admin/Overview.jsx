import React, { useEffect } from 'react'
import Dashboard from './Dashboard'
import { FaUsers } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { RiArticleFill } from 'react-icons/ri';
import './Overview.css'
import Todo from './todo/Todo';
import RecentActivities from './RecentActivities';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../redux/slices/articles';
import { fetchAllUsers } from '../../redux/slices/users';

const Overview = () => {
    const {posts} = useSelector(state => state.articles);
    const {totalUsers} = useSelector(state => state.users);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArticles())
        dispatch(fetchAllUsers())
    }, [dispatch])
    return (
        <Dashboard>
            <div className='overview'>
            <h3>Overview</h3>
            <div className='card-container'>
                <div className='card' id='vis-card'>
                    <FaUsers className='icon'/>
                    <div className='u-card'>
                        <p>Users</p>
                        <p><b>{totalUsers.length}</b></p>
                    </div>
                </div>
                <div className='card' id='art-card'>
                    <RiArticleFill className='icon'/>
                    <div className='u-card'>
                        <p>Total Articles</p>
                        <p><b>{posts.length}</b></p>
                    </div>
                </div>
                <div className='card' id='sat-card'>
                    <FaHeart className='icon'/>
                    <div className='u-card'>
                        <p>Users Satisfaction</p>
                        <p><b>87%</b></p>
                    </div>
                </div>
            </div>

            <div className='todo-recent-act'>
                <div className='todo-div'>
                    <Todo />
                </div>
                <div className='recent-act-div'>
                    <RecentActivities />
                </div>
            </div>
            </div>
        </Dashboard>
    )
}

export default Overview
