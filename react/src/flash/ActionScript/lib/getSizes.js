import { getStore } from '../../../'

export const getSizes = ( ) => {
	try {
		const stageSlice = getStore().getState().stage
		const windowWidth = stageSlice.width
        const windowHeight = stageSlice.height
		let stageW = 600
		let appBgW = 600
        let stageH = 450
        let appBgH = 450 

        let isPortrait = windowWidth < windowHeight
        let isMobile = windowWidth < 650        
        if (!isPortrait){
        	if (windowHeight < 450) isMobile = true
        }
		if ( isMobile ){
			if ( windowHeight > appBgH ) {
				appBgH = windowHeight
				appBgW = (appBgH * appBgW) / 450
			}
		}
		if ( windowWidth < 650 || windowHeight < 450 ) {
            stageW = windowWidth
            stageH = windowHeight
        }
		if ( isPortrait && isMobile){
			appBgH = windowHeight
		}
		return {
			isMobile,
			isPortrait,
			windowWidth,
			windowHeight,
			stageW,
			stageH,
			appBgW,
			appBgH,
		}
	} catch ( error ){
		console.log ('setStage error', error)
		return true
	}
}