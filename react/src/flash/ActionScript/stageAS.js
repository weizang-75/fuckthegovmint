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
        x: 8,
    },{
        opacity: 1,
        duration: duration,
        ease: Power2.easeOut,
    })

    gsap.fromTo( `#locale`, {
        opacity: 1,
        x: stageW - 78,
        y: 38,
    },{
        duration: duration,
        ease: Power2.easeOut,
    })

    const certificate = getElement( `certificate` )
    gsap.fromTo( `#certificate`, {
        x: stageW - certificate.width - 50,
                scaleY: 0.7,
        scaleX: 0.7,
        y: 28,
    },{
        opacity: 1,

        duration: duration,
        ease: Power2.easeOut,
                  onComplete: () => {
                      const tick = getElement( `tick` )
                      gsap.fromTo(`#tick`, {
                          y: stageH - 130,
                          x: stageW - tick.width - 15,
                          rotation: -45,
                      },{
                          opacity: 1,
                          rotation: 0,
                          duration: duration * 0.66,
                          ease: Power2.easeOut,
                      })

                      const question = getElement( `question` )
                      gsap.fromTo(`#question`, {
                          y: stageH/2 - question.height/2,
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
        const question = getElement( `question` )
        gsap.to( `#question`, {
            y: stageH/2 - question.height/2,
            duration: duration * 0.33,
            ease: Power2.easeOut,
        })

        gsap.to( `#certificate`, {
            x: stageW - certificate.width - 50,
            duration: duration * 0.33,
            ease: Power2.easeOut,
        })
        gsap.to( `#locale`, {
            x: stageW - 78,
            duration: duration * 0.33,
            ease: Power2.easeOut,
        })
        gsap.to( `#tick`, {
            x: stageW - tick.width - 15,
            y: stageH - 130,
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
