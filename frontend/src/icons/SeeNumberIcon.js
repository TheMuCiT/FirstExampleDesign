import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class SeeNumberIcon extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='0.3'>
                         <path
                              opacity='0.3'
                              d='M0.874512 5.01624C0.874512 5.01624 3.07451 0.625244 6.91151 0.625244C10.7485 0.625244 12.9485 5.01624 12.9485 5.01624C12.9485 5.01624 10.7485 9.40723 6.91151 9.40723C3.07451 9.40723 0.874512 5.01624 0.874512 5.01624Z'
                              stroke={color}
                              stroke-linecap='round'
                              stroke-linejoin='round'
                         />
                         <path
                              opacity='0.3'
                              d='M8.55865 5.0159C8.55865 5.34169 8.46204 5.66016 8.28102 5.93103C8.1 6.2019 7.84271 6.413 7.5417 6.53763C7.24069 6.66226 6.90948 6.69481 6.58997 6.63118C6.27045 6.56755 5.97699 6.41059 5.74669 6.18015C5.51639 5.94971 5.35961 5.65615 5.29617 5.3366C5.23274 5.01705 5.2655 4.68586 5.39031 4.38493C5.51512 4.08399 5.72637 3.82684 5.99735 3.64598C6.26833 3.46513 6.58686 3.3687 6.91265 3.3689C7.34929 3.36916 7.76796 3.5428 8.07661 3.85165C8.38527 4.16049 8.55865 4.57926 8.55865 5.0159Z'
                              stroke='black'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                         />
                    </g>
               </svg>
          )
     }
}

SeeNumberIcon.propTypes = {
     color: string,
     size: number,
}

SeeNumberIcon.defaultProps = {
     color: 'black',
     size: 27,
}
