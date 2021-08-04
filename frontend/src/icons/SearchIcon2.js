import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class SearchIcon2 extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 21 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g opacity='0.5'>
                         <path
                              opacity='0.5'
                              d='M2.0702 5.03701C3.19521 5.03701 4.1072 4.12502 4.1072 3.00001C4.1072 1.87501 3.19521 0.963013 2.0702 0.963013C0.945199 0.963013 0.0332031 1.87501 0.0332031 3.00001C0.0332031 4.12502 0.945199 5.03701 2.0702 5.03701Z'
                              fill={color}
                         />
                         <path
                              opacity='0.5'
                              d='M10.2172 5.03701C11.3422 5.03701 12.2542 4.12502 12.2542 3.00001C12.2542 1.87501 11.3422 0.963013 10.2172 0.963013C9.09217 0.963013 8.18018 1.87501 8.18018 3.00001C8.18018 4.12502 9.09217 5.03701 10.2172 5.03701Z'
                              fill='black'
                         />
                         <path
                              opacity='0.5'
                              d='M18.3641 5.03701C19.4892 5.03701 20.4011 4.12502 20.4011 3.00001C20.4011 1.87501 19.4892 0.963013 18.3641 0.963013C17.2391 0.963013 16.3271 1.87501 16.3271 3.00001C16.3271 4.12502 17.2391 5.03701 18.3641 5.03701Z'
                              fill='black'
                         />
                    </g>
               </svg>
          )
     }
}

SearchIcon2.propTypes = {
     color: string,
     size: number,
}

SearchIcon2.defaultProps = {
     color: 'black',
     size: 27,
}
