exports.randomCharacter = () => {	
	try { 
		const characters = [
			{ displayName: `Angry`, 
				avatar: `https://listingslab.com/public/png/avatars/Angry.png`}, 
			{ displayName: `Hammered`, 
				avatar: `https://listingslab.com/public/png/avatars/Hammered.png`}, 
			{ displayName: `Hatoff`, 
				avatar: `https://listingslab.com/public/png/avatars/Hatoff.png`}, 
			{ displayName: `Pointup`, 
				avatar: `https://listingslab.com/public/png/avatars/Pointup.png`}, 
			{ displayName: `Pointing`, 
				avatar: `https://listingslab.com/public/png/avatars/Pointing.png`}, 
			{ displayName: `Sitting`, 
				avatar: `https://listingslab.com/public/png/avatars/Sitting.png`}, 		
		]
		return characters[ Math.floor( Math.random() * characters.length) ]
	} catch ( error ) {
		console.log ( 'randomCharacter ERROR', error )
		return `randomCharacter ERROR  ${error}`
	}

}