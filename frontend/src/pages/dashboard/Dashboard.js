import React from 'react'

import { NavLink } from 'react-router-dom'

import DashboardTitle from './DashboardTitle/DashboardTitle'
import DashboardMain from './DashboardMain/DashboardMain'

import './dashboard.css'

const Dashboard = () => {
     return (
          <div className='dashboard'>
               <div className='dashboardTitleRow'>
                    <DashboardTitle />
               </div>
               <div className='dashboardPageRow'>
                    <div className='dashboardPageLinks'>
                         <div className='dashboardPageItem'>
                              <NavLink
                                   exact
                                   to='/dashboard'
                                   className='dashboardPageText'
                                   activeClassName='activeTop'
                              >
                                   Tasks
                              </NavLink>
                         </div>
                         <div className='dashboardPageItem'>
                              <NavLink
                                   to='/dashboard/objectives'
                                   className='dashboardPageText'
                                   activeClassName='activeTop'
                              >
                                   Objectives
                              </NavLink>
                         </div>
                         <div className='dashboardPageItem'>
                              <NavLink
                                   to='/dashboard/watch-list'
                                   className='dashboardPageText'
                                   activeClassName='activeTop'
                              >
                                   Watch list
                              </NavLink>
                         </div>
                         <div className='dashboardPageItem'>
                              <NavLink
                                   to='/dashboard/favorite'
                                   className='dashboardPageText'
                                   activeClassName='activeTop'
                              >
                                   Favorite
                              </NavLink>
                         </div>
                    </div>
               </div>
               <div className='TESTLINE' />
               <div className='dashboardMainRow'>
                    <DashboardMain />
               </div>
          </div>
     )
}

export default Dashboard
