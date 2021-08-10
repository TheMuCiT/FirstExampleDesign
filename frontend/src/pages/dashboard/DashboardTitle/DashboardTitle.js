import React from 'react'

import SearchIcon from '../../../icons/SearchIcon'
import { ReactComponent as SearchIcon1SVG } from '../../../icons/SearchIcon1SVG.svg'
import { ReactComponent as SearchIcon2SVG } from '../../../icons/SearchIcon2SVG.svg'

import './dashboardTitle.css'

const DashboardTitle = () => {
     return (
          <>
               <div className='dashboardTitleLeft'>
                    <div className='dashboardTitleLeftText'>Dashboard</div>
               </div>
               <div className='dashboardTitleRight'>
                    <div className='dashboardTitleRightIcon mobileDisable'>
                         <SearchIcon1SVG className='SearchIcon1SVG' />
                    </div>
                    <div className='dashboardTitleRightIcon mobileDisable'>
                         <SearchIcon2SVG className='SearchIcon1SVG' />
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
