import React from 'react'

import SearchIcon from '../../../icons/SearchIcon'
import SearchIcon1 from '../../../icons/SearchIcon1'
import SearchIcon2 from '../../../icons/SearchIcon2'

import './dashboardTitle.css'

const DashboardTitle = () => {
     return (
          <>
               <div className='dashboardTitleLeft'>
                    <div className='dashboardTitleLeftText'>Dashboard</div>
               </div>
               <div className='dashboardTitleRight'>
                    <div className='dashboardTitleRightIcon mobileDisable'>
                         <SearchIcon1 />
                    </div>
                    <div className='dashboardTitleRightIcon mobileDisable'>
                         <SearchIcon2 />
                    </div>
                    <div className='dashboardTitleRightSearch mobileDisable'>
                         <div className='dashboardTitleRightSearchIcon'>
                              <SearchIcon size={20} />
                         </div>
                         <input type='text' className='dashboardTitleRightSearchInput' placeholder='Search...' />
                    </div>
                    <div className='dashboardTitleRightButton'>
                         <div className='dashboardTitleRightButtonText'>Create New</div>
                    </div>
               </div>
          </>
     )
}

export default DashboardTitle
