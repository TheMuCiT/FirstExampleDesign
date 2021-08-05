import React from 'react'

import SeeNumberIcon from '../../../icons/SeeNumberIcon'
import CommentInfo from '../../../icons/CommentInfo'
import SaveIcon from '../../../icons/SaveIcon'

import image1 from '../../../images/image1.png'
import image2 from '../../../images/image2.png'
import image3 from '../../../images/image3.png'
import image4 from '../../../images/image4.png'

import './dashboardItem.css'

const DashboardItem = ({ info, section, color, colortext }) => {
     return (
          <div>
               {info.status === section ? (
                    <div className='dashboardItemBox'>
                         <div className='dashboardItemBoxHeader'>
                              <div
                                   className='dashboardItemHeaderStatusBox'
                                   style={{ backgroundColor: `${color}`, color: `${colortext}` }}
                              >
                                   {info.status}
                              </div>
                              <div className='dashboardItemHeaderData'>{info.data}</div>
                         </div>
                         <div className='dashboardItemBoxMain'>{info.text}</div>
                         {info.img !== '' ? (
                              <div className='dashboardItemBoxMainIMG'>
                                   <img src={info.img === 'image1' ? image1 : image2} alt='' width='92%' />
                              </div>
                         ) : null}

                         <div className='dashboardItemBoxButtom'>
                              <div className='dashboardItemBoxButtomIcon'>
                                   <img src={image3} alt='' />
                                   <img src={image4} alt='' style={{ marginLeft: '-23px' }} />
                              </div>

                              <div className='dashboardItemBoxButtomStatus'>
                                   <div className='dashboardItemBoxButtomStatusIcon'>
                                        <SeeNumberIcon size={13} />
                                   </div>
                                   <div className='dashboardItemBoxButtomStatusNumber'>{info.see}</div>
                                   <div className='dashboardItemBoxButtomStatusIcon'>
                                        <CommentInfo size={13} />
                                   </div>
                                   <div className='dashboardItemBoxButtomStatusNumber'>{info.comment}</div>
                                   <div className='dashboardItemBoxButtomStatusIcon'>
                                        <SaveIcon size={13} />
                                   </div>
                                   <div className='dashboardItemBoxButtomStatusNumber'>{info.save}</div>
                              </div>
                         </div>
                    </div>
               ) : null}
          </div>
     )
}

export default DashboardItem
