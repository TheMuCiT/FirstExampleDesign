import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class CommentInfo extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 13 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         opacity='0.3'
                         d='M0.819453 1.96858C0.847013 1.71189 0.974047 1.47622 1.17332 1.31209C1.37259 1.14796 1.62824 1.06844 1.88546 1.09058H10.4545C10.7122 1.06837 10.9685 1.14774 11.1685 1.31176C11.3686 1.47578 11.4967 1.71147 11.5255 1.96858V7.23761C11.4967 7.49472 11.3686 7.73041 11.1685 7.89443C10.9685 8.05845 10.7122 8.13782 10.4545 8.11561H2.95446L0.814453 9.87262L0.819453 1.96858Z'
                         stroke={color}
                    />
               </svg>
          )
     }
}

CommentInfo.propTypes = {
     color: string,
     size: number,
}

CommentInfo.defaultProps = {
     color: 'black',
     size: 27,
}
