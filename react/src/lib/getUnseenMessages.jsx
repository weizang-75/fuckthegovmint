export const getUnseenMessages = ( messages ) => {
	try {
		let unseen = []
		for ( let i = 0; i < messages.length; i++ ){
			const { seen } = messages[i]
			if ( !seen ) unseen.push( messages[i] )
		}
		return unseen
	} catch ( error ) {
	  console.warn( "getUnseenMessages error", error)
	  return false
	}
}
