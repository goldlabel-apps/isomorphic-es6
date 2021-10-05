import { imageHaystack } from '../'

export const getImage = ( needle, type ) => {
	try {
		if ( !type || !needle ) return `ERROR needle or type not set`
		let searchStr = needle.trim().toLowerCase()
		for ( let i = 0; i < imageHaystack.length; i++ ){
			// if (deviceHaystack[i].needle.indexOf( searchStr ) === -1){
			if (searchStr === imageHaystack[i].needle ){
				const {
					svg,
					png,
				} = imageHaystack[i]
				if ( type === `png` ) return png
				if ( type === `svg` ) return svg	
			}
		}
		return false
	} catch ( error ) {
		return `deviceImg ERROR  ${error}`
	}
}
