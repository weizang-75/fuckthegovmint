import { 
	toggleOpen,
	togglePublished,
} from '../app/actions'
import { 
	setSize,
} from '../stage/actions'

import { toggleStageReady } from '../stage/actions'

export const onIncoming = async( newData ) => {
	try {
		if ( !newData ) {
			togglePublished( false )
			return false
		}	
		const { open } = newData
		if ( !open ) toggleStageReady( false )
		toggleOpen( open )
		setSize()
		return true
	} catch ( error ) {
	  console.warn( "onIncoming person error", error)
	  return false
	}
}
