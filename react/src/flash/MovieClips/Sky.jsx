import React from 'react'

const Sky = props => {
    // const { color } = props
    // let c = `#fff`
    // if (color) {
    //     c = color
    // }
    return <React.Fragment>
            <svg {...props} viewBox="0 0 450 1000" >
                <defs>
                    <radialGradient cx="49.999%" cy="49.9995%" fx="49.999%" fy="49.9995%" r="154.197653%" gradientTransform="translate(0.499990,0.499995),scale(0.450000,1.000000),rotate(180.000000),translate(-0.499990,-0.499995)" id="radialGradient-1">
                        <stop stopColor="#DAEFF3" offset="0%"></stop>
                        <stop stopColor="#6EC1D4" offset="100%"></stop>
                    </radialGradient>
                </defs>
                <g id="TownAdvert" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Town" fill="url(#radialGradient-1)">
                        <polygon id="sky" points="0 450 1000 450 1000 0 0 0"></polygon>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    
}
export default Sky
