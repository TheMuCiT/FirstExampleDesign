import React from 'react'

import './dashboardMain.css'

const DashboardMain = () => {
     return (
          <div className='dashboardMain'>
               <div className='dashboardMainProposed'>
                    <div className='dashboardMainProposedHeader'>
                         <div className='dashboardMainProposedHeaderText'>PROPOSED</div>
                         <div className='dashboardMainProposedHeaderSelect'>Priority</div>
                    </div>
               </div>
               <div className='dashboardMainInProgress'>Progress</div>
               <div className='dashboardMainReview'>Review</div>
               <div className='dashboardMainComplete'>Complete</div>
          </div>
     )
}

export default DashboardMain
