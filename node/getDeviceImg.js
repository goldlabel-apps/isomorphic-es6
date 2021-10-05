import { deviceHaystack } from '../const/deviceHaystack'

export const getDeviceImg = ( needle, type ) => {
	try {
		if ( !type || !needle ) return `ERROR needle or type must be defined`

		let searchStr = needle.trim().toLowerCase()
		for ( let i = 0; i < deviceHaystack.length; i++ ){
			// if (deviceHaystack[i].needle.indexOf( searchStr ) === -1){
			if (searchStr === deviceHaystack[i].needle ){
				const {
					svg,
					png,
				} = deviceHaystack[i]
				if ( type === `png` ) return png
				if ( type === `svg` ) return svg	
			}
		}
		return false
	} catch ( error ) {
		console.log ( 'getDeviceImg ERROR', error )
		return `getDeviceImg ERROR  ${error}`
	}

}
