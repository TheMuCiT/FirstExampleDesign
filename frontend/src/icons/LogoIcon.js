import React, { Component } from 'react'
import { string, number } from 'prop-types'

export default class LogoIcon extends Component {
     render() {
          const { color, size } = this.props
          return (
               <svg width={size} height={size} viewBox='0 0 48 42' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                         d='M47.9951 21.975C47.8061 22.721 47.7531 23.493 47.5391 24.238C47.1088 25.7896 46.3678 27.2375 45.3611 28.494C42.7171 31.758 40.0851 35.032 37.4191 38.278C36.4532 39.5704 35.1193 40.5406 33.5922 41.0612C32.0651 41.5817 30.4162 41.6284 28.8621 41.195C28.624 41.1471 28.3977 41.0526 28.1963 40.9168C27.9949 40.7811 27.8224 40.6068 27.6886 40.4041C27.5548 40.2013 27.4625 39.9742 27.4169 39.7356C27.3714 39.497 27.3735 39.2518 27.4231 39.014C27.4663 38.7663 27.5601 38.53 27.6986 38.3201C27.8371 38.1102 28.0175 37.931 28.2283 37.7938C28.4392 37.6567 28.676 37.5644 28.924 37.5228C29.1721 37.4812 29.4261 37.4911 29.6701 37.552C30.5945 37.8078 31.5758 37.7677 32.4762 37.4371C33.3766 37.1065 34.1508 36.5022 34.6901 35.709C37.2111 32.547 39.7821 29.425 42.3261 26.28C43.576 24.7486 44.2597 22.833 44.2619 20.8562C44.2641 18.8794 43.5846 16.9623 42.3381 15.428C39.6907 12.1467 37.0344 8.87271 34.3691 5.60605C33.9571 5.09354 33.4352 4.68016 32.842 4.39648C32.2488 4.1128 31.5995 3.96607 30.942 3.96713C30.2844 3.96819 29.6355 4.117 29.0432 4.40259C28.4509 4.68817 27.9304 5.10321 27.5201 5.61703C24.8894 8.8517 22.2618 12.0887 19.6371 15.328C18.3167 16.9057 17.6062 18.9047 17.6346 20.9618C17.6631 23.0189 18.4286 24.9975 19.7921 26.538C20.1581 26.964 20.5251 27.39 20.8841 27.823C21.0537 28.0074 21.1848 28.2238 21.2695 28.4596C21.3543 28.6954 21.391 28.9457 21.3776 29.1959C21.3641 29.446 21.3009 29.691 21.1914 29.9163C21.0819 30.1417 20.9285 30.3429 20.7401 30.508C20.5483 30.6752 20.3245 30.8018 20.0824 30.8801C19.8403 30.9584 19.5847 30.9867 19.3313 30.9635C19.0779 30.9402 18.8319 30.8658 18.608 30.7447C18.3842 30.6236 18.1873 30.4584 18.0291 30.259C16.6318 28.8483 15.5144 27.1857 14.7361 25.359C13.9134 23.3274 13.658 21.1104 13.9973 18.9449C14.3365 16.7795 15.2576 14.7468 16.6621 13.064C19.2681 9.75002 21.9621 6.50404 24.6221 3.23504C25.38 2.29783 26.3368 1.54088 27.4233 1.01907C28.5098 0.497258 29.6988 0.223632 30.9041 0.217985C32.1094 0.212337 33.3009 0.474839 34.3922 0.986448C35.4836 1.49806 36.4475 2.24595 37.2141 3.17602C39.9761 6.52502 42.6961 9.90904 45.4231 13.286C46.7658 14.9836 47.6201 17.0151 47.8941 19.162C47.9081 19.262 47.8521 19.39 47.9941 19.441L47.9951 21.975Z'
                         fill={color}
                    />
                    <path
                         d='M6.10352e-05 19.537C0.148746 19.0701 0.251572 18.5899 0.307068 18.103C0.872299 15.9058 1.95551 13.8758 3.46606 12.183C5.89806 9.25103 8.26608 6.26301 10.6841 3.32201C11.578 2.16542 12.7712 1.2753 14.1346 0.747942C15.4979 0.22058 16.9795 0.0760754 18.4191 0.330034C18.6681 0.359818 18.9087 0.43921 19.1266 0.563555C19.3445 0.6879 19.5352 0.854659 19.6875 1.05397C19.8399 1.25329 19.9507 1.48111 20.0135 1.72399C20.0763 1.96686 20.0897 2.21987 20.0531 2.46803C20.0156 2.71598 19.929 2.95396 19.7985 3.16805C19.6679 3.38214 19.496 3.56802 19.2927 3.71486C19.0894 3.8617 18.8589 3.96655 18.6146 4.02324C18.3704 4.07993 18.1172 4.08734 17.8701 4.04503C17.0593 3.89304 16.2221 3.97278 15.4546 4.27507C14.6871 4.57737 14.0204 5.08995 13.5311 5.75401C10.9371 8.95735 8.33974 12.1574 5.73907 15.354C4.45995 16.8923 3.75774 18.8288 3.75354 20.8294C3.74934 22.83 4.44341 24.7694 5.71606 26.313C8.3354 29.5564 10.9627 32.793 13.5981 36.023C14.0097 36.5565 14.5388 36.988 15.1441 37.2839C15.7495 37.5799 16.4149 37.7323 17.0887 37.7295C17.7626 37.7267 18.4267 37.5687 19.0296 37.2677C19.6325 36.9668 20.1579 36.5309 20.5651 35.994C23.1611 32.794 25.7584 29.594 28.3571 26.394C29.6662 24.8402 30.3829 22.873 30.3801 20.8413C30.3774 18.8095 29.6554 16.8443 28.3421 15.294C28.0151 14.894 27.6791 14.505 27.3661 14.094C27.1988 13.9065 27.0722 13.6864 26.9941 13.4476C26.916 13.2088 26.8882 12.9564 26.9123 12.7063C26.9365 12.4562 27.0121 12.2138 27.1344 11.9944C27.2567 11.7749 27.4231 11.5831 27.6231 11.431C27.8149 11.2688 28.038 11.1478 28.2786 11.0753C28.5191 11.0029 28.772 10.9807 29.0215 11.01C29.271 11.0394 29.5118 11.1197 29.729 11.2459C29.9462 11.3722 30.1351 11.5417 30.2841 11.744C31.594 13.1099 32.6295 14.7146 33.3341 16.471C34.116 18.492 34.345 20.6849 33.9975 22.8239C33.65 24.9629 32.7386 26.9705 31.3571 28.64C28.6858 32.0014 25.9797 35.3347 23.2391 38.64C22.4859 39.5246 21.5512 40.2368 20.4985 40.7283C19.4458 41.2198 18.2997 41.4791 17.1379 41.4886C15.9762 41.4981 14.8259 41.2575 13.7654 40.7833C12.7048 40.309 11.7586 39.6122 10.9911 38.74C8.11806 35.323 5.32806 31.834 2.54706 28.34C1.12769 26.5583 0.270679 24.3944 0.085083 22.124C0.0790825 22.059 0.0720596 22.002 6.10352e-05 21.98V19.537Z'
                         fill='#0F1033'
                    />
               </svg>
          )
     }
}

LogoIcon.propTypes = {
     color: string,
     size: number,
}

LogoIcon.defaultProps = {
     color: '#341EFF',
     size: 27,
}
