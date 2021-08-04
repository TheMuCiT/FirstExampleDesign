import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class DotIcon extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 6 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         d='M3 6.5C4.65685 6.5 6 5.15685 6 3.5C6 1.84315 4.65685 0.5 3 0.5C1.34315 0.5 0 1.84315 0 3.5C0 5.15685 1.34315 6.5 3 6.5Z'
                         fill={color}
                    />
               </svg>
          )
     }
}

DotIcon.propTypes = {
     color: string,
     size: number,
}

DotIcon.defaultProps = {
     color: '#4ECAFF',
     size: 27,
}
