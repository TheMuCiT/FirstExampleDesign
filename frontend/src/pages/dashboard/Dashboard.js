import React from 'react'

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
                              <div className='dashboardPageText'>Tasks</div>
                         </div>
                         <div className='dashboardPageItem'>
                              <div className='dashboardPageText'>Objectives</div>
                         </div>
                         <div className='dashboardPageItem'>
                              <div className='dashboardPageText'>Watch list</div>
                         </div>
                         <div className='dashboardPageItem'>
                              <div className='dashboardPageText'>Favorite</div>
                         </div>
                    </div>
               </div>
               <div className='dashboardMainRow'>
                    <DashboardMain />
               </div>
          </div>
     )
}

export default Dashboard
