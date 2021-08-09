import React from 'react'
import { NavLink } from 'react-router-dom'

import LogoIcon from '../../icons/LogoIcon'
import { ReactComponent as NotificationIconSVG } from '../../icons/NotificationIconSVG.svg'
import { ReactComponent as DashboardIconSVG } from '../../icons/DashboardIconSVG.svg'
import { ReactComponent as DiscountsIconSVG } from '../../icons/DiscountsIconSVG.svg'
import { ReactComponent as UserIconSVG } from '../../icons/UserIconSVG.svg'
import { ReactComponent as StatisticsIconSVG } from '../../icons/StatisticsIconSVG.svg'
import { ReactComponent as SettingsIconSVG } from '../../icons/SettingsIconSVG.svg'

import './sidebar.css'

export const Sidebar = () => {
     return (
          <div className='SideBar'>
               <div className='sideBarLogo'>
                    <LogoIcon size={48} />
               </div>
               <NavLink to='/notification' activeClassName='active'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <NotificationIconSVG className='sidebarSVG' />
                         </div>
                    </div>
               </NavLink>
               <NavLink activeClassName='active' to='/dashboard'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <DashboardIconSVG className='sidebarSVG' />
                         </div>
                    </div>
               </NavLink>
               <NavLink exact activeClassName='active' to='/percent'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <DiscountsIconSVG className='sidebarSVG' />
                         </div>
                    </div>
               </NavLink>
               <NavLink to='/people' activeClassName='active'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <UserIconSVG className='sidebarSVG' />
                         </div>
                    </div>
               </NavLink>
               <NavLink to='/stats' activeClassName='active'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <StatisticsIconSVG className='sidebarSVG' />
                         </div>
                    </div>
               </NavLink>
               <NavLink to='/settings' activeClassName='active'>
                    <div className='sidebarLinks'>
                         <div className='sidebarLinkText'>
                              <SettingsIconSVG className='sidebarSVG' />
                         </div>
                    </div>
               </NavLink>
          </div>
     )
}
