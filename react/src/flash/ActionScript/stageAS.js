import { 
    gsap,
    Power2,
} from 'gsap'
import { 
    getSizes,
    getElement,
} from './'
import { toggleStageReady } from '../../redux/stage/actions'
import { getStore } from '../../'
const duration = 0.75

const setup = () => {
    const sizes = getSizes()
    const {
        stageW,
        appBgW,
        appBgH,
        stageH,
    } = sizes

    gsap.fromTo( `#logo`, {
        opacity: 1,
        x: 8,
        scaleY: 0,
    },{
        scaleY: 1,
        duration: duration,
        ease: Power2.easeOut,
    })

    const certificate = getElement( `certificate` )
    gsap.fromTo( `#certificate`, {
        x: stageW - certificate.width - 4,
        y: 12,
        opacity: 1,
        scaleY: 0,
    },{
        scaleY: 1,
        duration: duration,
        ease: Power2.easeOut,
                  onComplete: () => {
                      const tick = getElement( `tick` )
                      gsap.fromTo(`#tick`, {
                          y: stageH - 140,
                          x: stageW - tick.width - 8,
                          rotation: -45,
                      },{
                          opacity: 1,
                          rotation: 0,
                          duration: duration * 0.66,
                          ease: Power2.easeOut,
                      })
                      gsap.fromTo(`#question`, {
                          y: 145,
                      },{
                          opacity: 1,
                          duration: duration,
                          ease: Power2.easeOut,
                      })

                  }
    })

    gsap.set( `#appBg`, {
        x: (stageW - appBgW)/2,
        y: (stageH - appBgH)/2,
    })


    toggleStageReady( true )
    return true   
}

const onResize = () => {
    // console.log ('stageAS onResize')
    const sizes = getSizes()
    const {
        stageW,
        appBgW,
        appBgH,
        stageH,
    } = sizes
    const { stageReady } = getStore().getState().stage
    if ( stageReady ) {
        const certificate = getElement( `certificate` )
        const tick = getElement( `tick` )
        gsap.to( `#certificate`, {
            x: stageW - certificate.width,
            y: 8,
            duration: duration * 0.33,
            ease: Power2.easeOut,
        })
        gsap.to( `#tick`, {
            x: stageW/2 - tick.width/2,
            y: stageH - 140,
            duration: duration * 0.33,
            ease: Power2.easeOut,
        })
        gsap.set( `#appBg`, {
            duration: duration * 0.33,
            ease: Power2.easeOut,
            x: (stageW - appBgW)/2,
            y: (stageH - appBgH)/2,
        })
    }
    return true
}

export const stageAS = ( event ) => {
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
