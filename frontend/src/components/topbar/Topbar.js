import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import LogoIcon from '../../icons/LogoIcon'
import SearchIcon1 from '../../icons/SearchIcon1'
import SearchIcon2 from '../../icons/SearchIcon2'
import { ReactComponent as SearchIconSVG } from '../../icons/SearchIcon.svg'
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

     const WindowChange = () => {
          if (window.innerWidth > 600) {
               setMobile(false)
          }
     }

     useEffect(() => {
          WindowChange()
     }, [])

     window.addEventListener('resize', WindowChange)

     return (
          <div className='topbar'>
               <div className={Mobile ? 'mobileMenu active' : 'mobileMenu'}>
                    <div className='mobileMenuTop'>
                         <div className='mobileMenuOff' onClick={HandleMobileMenu}>
                              <CloseIcon size={30} />
                         </div>
                         <div className='mobileMenuIcon'>
                              <LogoIcon size={40} />
                         </div>
                    </div>
                    <div className='mobileMenuContent'>
                         <NavLink to='/notification' activeClassName='active' className='notActive'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon' onClick={HandleMobileMenu}>
                                        <NotificationIcon size={24} />
                                        <div className='mobileMenuText'>Notification</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink activeClassName='active' to='/dashboard' className='notActive'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon' onClick={HandleMobileMenu}>
                                        <DashboardIcon size={24} />
                                        <div className='mobileMenuText'>Dashboard</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink exact activeClassName='active' to='/percent' className='notActive'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon' onClick={HandleMobileMenu}>
                                        <PercentIcon size={24} />
                                        <div className='mobileMenuText'>Discounts</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink to='/people' activeClassName='active' className='notActive'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon' onClick={HandleMobileMenu}>
                                        <PeopleIcon size={24} />
                                        <div className='mobileMenuText'>Users</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink to='/stats' activeClassName='active' className='notActive'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon' onClick={HandleMobileMenu}>
                                        <StatusIcon size={24} />
                                        <div className='mobileMenuText'>Statistics</div>
                                   </div>
                              </div>
                         </NavLink>
                         <NavLink to='/settings' activeClassName='active' className='notActive'>
                              <div className='sidebarLinks'>
                                   <div className='sidebarLinkIcon' onClick={HandleMobileMenu}>
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
                         <div className={Mobile ? 'topbarSearchIcon disable' : 'topbarSearchIcon'}>
                              <SearchIconSVG className='topbarSearchIconSVG' />
                         </div>
                         <input type='text' className='topbarSearchInput' />
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
