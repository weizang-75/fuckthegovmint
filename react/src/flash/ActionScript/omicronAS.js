import { 
    gsap,
    Power2,
} from 'gsap'
import { 
    getSizes,
    getElement,
} from './'
// import { getStore } from '../../'
const duration = 0.75

const toOmnicron = () => {
    const sizes = getSizes()
    const {
        stageW,
        stageH,
    } = sizes
    const omnicron_0 = getElement( `omnicron_0` )
    const omnicron_1 = getElement( `omnicron_1` )
    const omnicron_2 = getElement( `omnicron_2` )
    const omnicron_3 = getElement( `omnicron_3` )
    const omnicron_4 = getElement( `omnicron_4` )
    const omnicron_5 = getElement( `omnicron_5` ) 
    const omnicron_6 = getElement( `omnicron_6` )
    
    const midY = stageH/2 - omnicron_1.height/2  -34
    const wordWidth = omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width + omnicron_4.width + omnicron_5.width + omnicron_6.width
    const offsetX = (stageW - wordWidth)/2

    setTimeout(() => {
        gsap.to( `#omnicron_0`, {
            x: offsetX + 0,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 100)

    setTimeout(() => {
        gsap.to( `#omnicron_1`, {
            x: offsetX + omnicron_0.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 200)

    setTimeout(() => {
        gsap.to( `#omnicron_2`, {
            x: offsetX + omnicron_0.width + omnicron_1.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 300)

    setTimeout(() => {
        gsap.to( `#omnicron_3`, {
            x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 400)

    setTimeout(() => {
        gsap.to( `#omnicron_4`, {
            x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 500)

    setTimeout(() => {
        gsap.to( `#omnicron_5`, {
            x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width + omnicron_4.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 600)

    setTimeout(() => {
        gsap.to( `#omnicron_6`, {
            x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width + omnicron_4.width + omnicron_5.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
            onComplete: () => {
                setTimeout(() => {
                    toMoronic()
                },2500)
            }
        })
    }, 700)

}

const toMoronic = () => {
    const sizes = getSizes()
    const {
        stageW,
        stageH,
    } = sizes
    const omnicron_0 = getElement( `omnicron_0` )
    const omnicron_1 = getElement( `omnicron_1` )
    const omnicron_2 = getElement( `omnicron_2` )
    const omnicron_3 = getElement( `omnicron_3` )
    const omnicron_4 = getElement( `omnicron_4` )
    const omnicron_5 = getElement( `omnicron_5` ) 
    const omnicron_6 = getElement( `omnicron_6` )
    
    const midY = stageH/2 - omnicron_1.height/2  -34
    const wordWidth = omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width + omnicron_4.width + omnicron_5.width + omnicron_6.width
    const offsetX = (stageW - wordWidth)/2

    setTimeout(() => {
        gsap.to( `#omnicron_1`, {
            x: offsetX + 0,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 100)
    setTimeout(() => {
        gsap.to( `#omnicron_0`, {
            x: offsetX + 0 + omnicron_1.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 200)
    setTimeout(() => {
        gsap.to( `#omnicron_4`, {
            x: offsetX + 0 + omnicron_1.width + omnicron_0.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 300)
    setTimeout(() => {
        gsap.to( `#omnicron_5`, {
            x: offsetX + 0 + omnicron_1.width + omnicron_0.width + omnicron_4.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 400)

   setTimeout(() => {
        gsap.to( `#omnicron_6`, {
            x: offsetX + 0 + omnicron_1.width + omnicron_0.width + omnicron_4.width + omnicron_5.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
        })
    }, 500)

   setTimeout(() => {
    gsap.to( `#omnicron_2`, {
        x: offsetX + 0 + omnicron_1.width + omnicron_0.width + omnicron_4.width + omnicron_5.width + omnicron_6.width,
        y: midY,
        duration: duration * 1,
        ease: Power2.easeOut,
    })
   }, 600)

   setTimeout(() => {
        gsap.to( `#omnicron_3`, {
            x: offsetX + 0 + omnicron_1.width + omnicron_0.width + omnicron_4.width + omnicron_5.width + omnicron_6.width + omnicron_2.width,
            y: midY,
            duration: duration * 1,
            ease: Power2.easeOut,
            onComplete: () => {
                setTimeout(() => {
                    toOmnicron()
                },2500)
            }
        })
   }, 700)

    return true
}

const setup = () => {
    const sizes = getSizes()
    const {
        stageW,
        appBgW,
        appBgH,
        stageH,
    } = sizes

    const omnicron_0 = getElement( `omnicron_0` )
    const omnicron_1 = getElement( `omnicron_1` )
    const omnicron_2 = getElement( `omnicron_2` )
    const omnicron_3 = getElement( `omnicron_3` )
    const omnicron_4 = getElement( `omnicron_4` )
    const omnicron_5 = getElement( `omnicron_5` ) 
    const omnicron_6 = getElement( `omnicron_6` )
    const question = getElement( `question` )
    
    const midY = stageH/2 - omnicron_0.height/2 -34
    const wordWidth = omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width + omnicron_4.width + omnicron_5.width + omnicron_6.width
    const offsetX = (stageW - wordWidth)/2

    gsap.set( `#question`, {
        opacity: 1,
        x: stageW/2 - question.width/2,
        y: midY + 90,
    })

    gsap.set( `#omnicron_0`, {
        opacity: 1,
        x: offsetX + 0,
        y: midY,
    })
    gsap.set( `#omnicron_1`, {
        opacity: 1,
        x: offsetX + omnicron_0.width,
        y: midY,
    })
    gsap.set( `#omnicron_2`, {
        opacity: 1,
        x: offsetX + omnicron_0.width + omnicron_1.width,
        y: midY,
    })
    gsap.set( `#omnicron_3`, {
        opacity: 1,
        x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width,
        y: midY,
    })
    gsap.set( `#omnicron_4`, {
        opacity: 1,
        x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width,
        y: midY,
    })
    gsap.set( `#omnicron_5`, {
        opacity: 1,
        x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width  + omnicron_4.width,
        y: midY,
    })
    gsap.set( `#omnicron_6`, {
        opacity: 1,
        x: offsetX + omnicron_0.width + omnicron_1.width + omnicron_2.width + omnicron_3.width  + omnicron_4.width + omnicron_5.width,
        y: midY,
    })
    gsap.set( `#appBg`, {        
        x: (stageW - appBgW)/2,
        y: (stageH - appBgH)/2,
    })

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
    gsap.to( `#appBg`, {
        duration: duration * 0.33,
        ease: Power2.easeOut,
        x: (stageW - appBgW)/2,
        y: (stageH - appBgH)/2,
    })
    setup()
    return true
}


export const omicronAS = ( event ) => {
    switch ( event ) {
        case `setup`:
            return setup()
        case `onResize`: 
            return onResize() 
        case `toMoronic`: 
            return toMoronic() 
        case `toOmnicron`: 
            return toOmnicron()          
        default: {
            return null
        }
    }
}
