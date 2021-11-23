import { getStore } from '../../'
import { 
    gsap,
    Power2,
} from 'gsap'
import { 
    getElement,
    getSizes,
} from './'
import {
    setUnseen,
} from '../../redux/stage/actions'

const duration = 0.66
const offsetY = -30

const setup = () => {
    const el = getElement( `newmessage` )
    if ( !el ) return false
    const { height, width } = el
    const sizes = getSizes()
    const { stageH, stageW } = sizes
    gsap.set ( `#newmessage`, {
        opacity: 1,
        scaleY: 0,
        x: stageW/2 - width/2,
        y: stageH/2 - height/2 + offsetY,
    })
    setUnseen({ playhead: `hidden`, playing: false })
    return true
}

const onResize = () => {
    const playhead = getStore().getState().stage.mainmenu.playhead
    if (playhead !== `notsetup`) {
        const el = getElement( `newmessage` )
        if ( !el ) return false
        const { height, width } = el
        const sizes = getSizes()
        const { stageH, stageW } = sizes
        gsap.to ( `#newmessage`, { 
            x: stageW/2 - width/2,
            y: stageH/2 - height/2 + offsetY,
            duration: duration * 0.66,
            ease: Power2.easeOut,
                  onComplete: () => {
                  },
        })
        return true 
    }
    return true
}

const hide = () => {
    const el = getElement( `newmessage` )
    if ( !el ) return false
    gsap.to ( `#newmessage`, {
        scaleY: 0,
        duration: duration * 0.66,
        ease: Power2.easeOut,
              onComplete: () => {
                  setUnseen({ playhead: `hidden`, playing: false })
              },
    })
    return true
}

const show = () => { 
    const el = getElement( `newmessage` )
    if ( !el ) return false
    setUnseen({ playhead: `showing`, playing: true })
    gsap.to ( `#newmessage`, {
        scaleY: 1,
        duration: duration * 0.66,
        ease: Power2.easeOut,
              onComplete: () => {
                  setUnseen({ playhead: `showing`, playing: false })
              },
    })
    return true
}

export const newmessageAS = event => {
    switch ( event ) {
        case `onResize`: return onResize()
        case `setup`: return setup()
        case `hide`: return hide()
        case `show`: return show()
        default: { return null }
    }
}
