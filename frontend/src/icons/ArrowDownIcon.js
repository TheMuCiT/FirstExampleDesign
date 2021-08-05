import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class ArrowDownIcon extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         opacity='1'
                         d='M6.72864 5.51209L11.4726 0.764088C11.5556 0.680699 11.6543 0.614526 11.7629 0.569373C11.8715 0.52422 11.988 0.500977 12.1056 0.500977C12.2233 0.500977 12.3398 0.52422 12.4484 0.569373C12.557 0.614526 12.6557 0.680699 12.7386 0.764088C12.9066 0.932756 13.0009 1.16108 13.0009 1.39909C13.0009 1.6371 12.9066 1.86542 12.7386 2.03409L7.36564 7.41309C7.20191 7.57446 6.98264 7.66705 6.75281 7.67189C6.52298 7.67672 6.30001 7.59343 6.12964 7.43909L0.716634 2.03909C0.57153 1.86688 0.496256 1.64653 0.50567 1.42154C0.515084 1.19655 0.608503 0.983257 0.767485 0.823773C0.926467 0.664288 1.13946 0.570198 1.36442 0.560074C1.58939 0.54995 1.80997 0.624529 1.98263 0.769088L6.72864 5.51209Z'
                         fill={color}
                    />
               </svg>
          )
     }
}

ArrowDownIcon.propTypes = {
     color: string,
     size: number,
}

ArrowDownIcon.defaultProps = {
     color: '#e7e7e7',
     size: 27,
}
