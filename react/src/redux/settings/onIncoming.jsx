import { togglePublished } from '../app/actions'
import { onNewSettings } from './actions'
import { 
	setPlayhead,
	updateFlash,
} from '../stage/actions'

export const onIncoming = async( newData ) => {
	try {
		if ( !newData ) {
			togglePublished( false )
			return false
		}
		const {
			published,
			flash,
		} = newData
		onNewSettings( newData )
		togglePublished( published )
		updateFlash( flash )
		if ( published ){
			setPlayhead(`ready`)
		}
		return true
	} catch ( error ) {
	  console.warn( "onIncoming settings ", error)
	  return false
	}
}
