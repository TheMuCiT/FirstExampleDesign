import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import LogoIcon from '../../icons/LogoIcon'
import SearchIcon1 from '../../icons/SearchIcon1'
import SearchIcon2 from '../../icons/SearchIcon2'
import SearchIcon from '../../icons/SearchIcon'
import NotificationIcon from '../../icons/NotificationIcon'
import SettingsIcon from '../../icons/SettingsIcon'
import StatusIcon from '../../icons/StatusIcon'
import PeopleIcon from '../../icons/PeopleIcon'
import DashboardIcon from '../../icons/DashboardIcon'
import PercentIcon from '../../icons/PercentIcon'
import CloseIcon from '../../icons/CloseIcon'

import './topbar.css'

const Topbar = () => {
     const [Mobile, setMobile] = useState(false)

     const HandleMobileMenu = () => {
          setMobile(!Mobile)
     }

     return (
          <div className='topbar'>
               <div className={Mobile ? 'mobileMenu active' : 'mobileMenu'}>
                    <div className='mobileMenuTop'>
                         <div className='mobileMenuOff' onClick={HandleMobileMenu}>
                              <CloseIcon size={30} />
                         </div>
                         <div className='mobileMenuIcon'>
                              <LogoIcon size={30} />
                         </div>
                    </div>
                    <div className='mobileMenuContent'>
                         <NavLink to='/notification' activeClassName='active'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon'>
                                        <NotificationIcon size={24} />
                                        <div className='mobileMenuText'>Notification</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink activeClassName='active' to='/dashboard'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon'>
                                        <DashboardIcon size={24} />
                                        <div className='mobileMenuText'>Dashboard</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink exact activeClassName='active' to='/percent'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon'>
                                        <PercentIcon size={24} />
                                        <div className='mobileMenuText'>Discounts</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink to='/people' activeClassName='active'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon'>
                                        <PeopleIcon size={24} />
                                        <div className='mobileMenuText'>Users</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink to='/stats' activeClassName='active'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon'>
                                        <StatusIcon size={24} />
                                        <div className='mobileMenuText'>Statistics</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink to='/settings' activeClassName='active'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon'>
                                        <SettingsIcon size={24} />
                                        <div className='mobileMenuText'>Settings</div>
                                   </div>
                              </div>
                         </NavLink>
                    </div>
               </div>
               <div className='topbarLeft'>
                    <div className='topbarLogo mobileShow' onClick={HandleMobileMenu}>
                         <LogoIcon size={48} />
                    </div>
               </div>
               <div className='topbarRight'>
                    <div className='topbarSearch'>
                         <div className='topbarSearchIcon'>
                              <SearchIcon size={20} />
                         </div>
                         <input type='text' className='topbarSearchInput' placeholder='Search...' />
                    </div>
                    <div className='topbarIcon'>
                         <SearchIcon1 size={20} />
                    </div>
                    <div className='topbarIcon'>
                         <SearchIcon2 size={20} />
                    </div>
               </div>
          </div>
     )
}

export default Topbar
