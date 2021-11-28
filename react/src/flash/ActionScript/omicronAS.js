// import { 
//     gsap,
//     Power2,
// } from 'gsap'
// import { 
//     getSizes,
//     getElement,
// } from './'
// import { getStore } from '../../'
// const duration = 0.75

const setup = () => {
    return true   
}

const onResize = () => {
    return true
}


export const omicronAS = ( event ) => {
    switch ( event ) {
        case `setup`:
            return setup()
        case `onResize`: 
            return onResize()          
        default: {
            return null
        }
    }
}
