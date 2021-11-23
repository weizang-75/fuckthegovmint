import { getStore } from '../../'
import { 
    gsap,
    Power2,
} from 'gsap'
import { 
    getElement,
    getSizes,
} from './'
import { setMainmenu } from '../../redux/stage/actions'

const duration = 0.66
const offsetY = -30

const setup = () => {
    const el = getElement( `mainmenu` )
    if ( !el ) return false
    const { height, width } = el
    const sizes = getSizes()
    const { stageH, stageW } = sizes
    gsap.set ( `#mainmenu`, {
        opacity: 1,
        scaleY: 0,
        x: stageW/2 - width/2,
        y: stageH/2 - height/2 + offsetY,
    })
    // console.log ('playhead hidden')
    setMainmenu({ playhead: `hidden`, playing: false })
    return true
}

const onResize = () => {
    const playhead = getStore().getState().stage.mainmenu.playhead
    if (playhead !== `notsetup`) {
        const el = getElement( `mainmenu` )
        if ( !el ) return false
        const { height, width } = el
        const sizes = getSizes()
        const { stageH, stageW } = sizes
        gsap.to ( `#mainmenu`, { 
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
    const el = getElement( `mainmenu` )
    if ( !el ) return false
    gsap.to ( `#mainmenu`, {
        scaleY: 0,
        duration: duration * 0.66,
        ease: Power2.easeOut,
              onComplete: () => {
                  setMainmenu({ playhead: `hidden`, playing: false })
              },
    })
    return true
}

const show = () => { 
    const el = getElement( `mainmenu` )
    if ( !el ) return false
    setMainmenu({ playhead: `showing`, playing: true })
    gsap.to ( `#mainmenu`, {
        scaleY: 1,
        duration: duration * 0.66,
        ease: Power2.easeOut,
              onComplete: () => {
                  setMainmenu({ playhead: `showing`, playing: false })
              },
    })
    return true
}

export const mainmenuAS = event => {
    switch ( event ) {
        case `onResize`: return onResize()
        case `setup`: return setup()
        case `hide`: return hide()
        case `show`: return show()
        default: { return null }
    }
}
