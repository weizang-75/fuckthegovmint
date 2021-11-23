export const getElement = ( elementId ) => {
	try {
		const el = document.getElementById( elementId )
		if ( !el ) return false
		return {
			div: el,
			height: el.offsetHeight,
			width: el.offsetWidth,
		}
	} catch ( error ){
		console.log ('setStage error', error)
		return false
	}
}