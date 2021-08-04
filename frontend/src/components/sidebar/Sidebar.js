import React from 'react'
import { NavLink } from 'react-router-dom'

import LogoIcon from '../../icons/LogoIcon'
import NotificationIcon from '../../icons/NotificationIcon'
import DashboardIcon from '../../icons/DashboardIcon'
import PercentIcon from '../../icons/PercentIcon'
import PeopleIcon from '../../icons/PeopleIcon'
import StatusIcon from '../../icons/StatusIcon'
import SettingsIcon from '../../icons/SettingsIcon'

import './sidebar.css'

const Sidebar = () => {
     return (
          <div className='SideBar'>
               <div className='sideBarLogo'>
                    <LogoIcon size={48} />
               </div>
               <NavLink exact activeClassName='active' to='/notification'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkIcon'>
                              <NotificationIcon size={24} />
                         </div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <DashboardIcon size={24} />
                         </div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/percent'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <PercentIcon size={24} />
                         </div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/people'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <PeopleIcon size={24} />
                         </div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/stats'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <StatusIcon size={24} />
                         </div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/settings'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <SettingsIcon size={24} />
                         </div>
                    </div>
               </NavLink>
          </div>
     )
}

export default Sidebar
