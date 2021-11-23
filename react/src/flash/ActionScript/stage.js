import { 
    gsap,
    Power1,
} from 'gsap'
import { getSizes } from './'
import { toggleStageReady } from '../../redux/stage/actions'
import { getStore } from '../../'
const duration = 1

const setup = () => {
    const sizes = getSizes()
    const {
        stageW,
        appBgW,
        appBgH,
        stageH,
    } = sizes
    gsap.set( `#appBg`, {
        x: (stageW - appBgW)/2,
        y: (stageH - appBgH)/2,
    })
    toggleStageReady( true )
    return true   
}

const onToggleOpen = () => {
    console.log ('onToggleOpen')
    const sizes = getSizes()
    const {
        stageW,
        appBgW,
        appBgH,
        stageH,
    } = sizes
    const { stageReady } = getStore().getState().stage
    if ( stageReady ) {
        gsap.set( `#appBg`, {
            duration: duration * 0.25,
            ease: Power1.easeOut,
            x: (stageW - appBgW)/2,
            y: (stageH - appBgH)/2,
        })
    }
    return true
}

const onResize = () => {
    const sizes = getSizes()
    const {
        stageW,
        appBgW,
        appBgH,
        stageH,
    } = sizes
    const { stageReady } = getStore().getState().stage
    if ( stageReady ) {
        gsap.set( `#appBg`, {
            duration: duration * 0.25,
            ease: Power1.easeOut,
            x: (stageW - appBgW)/2,
            y: (stageH - appBgH)/2,
        })
    }
    return true
}

export const stage = ( event ) => {
    switch ( event ) {
        case `setup`:
            return setup()
        case `onResize`: 
            return onResize()
        case `onToggleOpen`: 
            return onToggleOpen()            
        default: {
            return null
        }
    }
}
