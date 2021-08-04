import React from 'react'

import DashboardItem from '../DashboardItem/DashboardItem'
import DashboardInfo from '../../../dummyData/DashboardInfo'
import DotIcon from '../../../icons/DotIcon'
import ArrowDownIcon from '../../../icons/ArrowDownIcon'

import './dashboardMain.css'

const DashboardMain = () => {
     return (
          <div className='dashboardMain'>
               <div className='dashboardMainProposed'>
                    <div className='dashboardMainProposedHeader'>
                         <div className='dashboardMainProposedHeaderLeft'>
                              <div className='dashboardMainProposedHeaderLeftIcon'>
                                   <DotIcon size={7} color='#4ECAFF' />
                              </div>
                              PROPOSED
                         </div>
                         <div className='dashboardMainProposedHeaderSelect'>
                              Priority
                              <div className='dashboardMainProposedHeaderRightIcon'>
                                   <ArrowDownIcon size={15} />
                              </div>
                         </div>
                    </div>
                    <div className='dashboardMainProposedList'>
                         {DashboardInfo.map((info) => (
                              <DashboardItem info={info} section='Proposed' />
                         ))}
                    </div>
               </div>
               <div className='dashboardMainInProgress'>
                    <div className='dashboardMainProposedHeader'>
                         <div className='dashboardMainProposedHeaderLeft'>
                              <div className='dashboardMainProposedHeaderLeftIcon'>
                                   <DotIcon size={7} color='#4ECAFF' />
                              </div>
                              IN PROGRESS
                         </div>
                         <div className='dashboardMainProposedHeaderSelect'>
                              Name
                              <div className='dashboardMainProposedHeaderRightIcon'>
                                   <ArrowDownIcon size={15} />
                              </div>
                         </div>
                    </div>
                    <div className='dashboardMainProposedList'>
                         {DashboardInfo.map((info) => (
                              <DashboardItem info={info} section='In Progress' />
                         ))}
                    </div>
               </div>
               <div className='dashboardMainReview'>
                    <div className='dashboardMainProposedHeader'>
                         <div className='dashboardMainProposedHeaderLeft'>
                              <div className='dashboardMainProposedHeaderLeftIcon'>
                                   <DotIcon size={7} color='#4ECAFF' />
                              </div>
                              REVIEW
                         </div>
                         <div className='dashboardMainProposedHeaderSelect'>
                              Data added
                              <div className='dashboardMainProposedHeaderRightIcon'>
                                   <ArrowDownIcon size={15} />
                              </div>
                         </div>
                    </div>
                    <div className='dashboardMainProposedList'>
                         {DashboardInfo.map((info) => (
                              <DashboardItem info={info} section='Review' />
                         ))}
                    </div>
               </div>
               <div className='dashboardMainComplete'>
                    <div className='dashboardMainProposedHeader'>
                         <div className='dashboardMainProposedHeaderLeft'>
                              <div className='dashboardMainProposedHeaderLeftIcon'>
                                   <DotIcon size={7} color='#4ECAFF' />
                              </div>
                              COMPLETE
                         </div>
                         <div className='dashboardMainProposedHeaderSelect'>
                              Priority
                              <div className='dashboardMainProposedHeaderRightIcon'>
                                   <ArrowDownIcon size={15} />
                              </div>
                         </div>
                    </div>
                    <div className='dashboardMainProposedList'>
                         {DashboardInfo.map((info) => (
                              <DashboardItem info={info} section='Complete' />
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default DashboardMain
