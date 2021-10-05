exports.randomYear = () => {	
	try {
		const centuries = [ `16`, `17`, `18`, `19`, `20` ]
		const year = Math.floor(Math.random() * 90 + 10)
		return `${centuries[ Math.floor( Math.random() * centuries.length) ]}${year}`
	} catch ( error ) {
		console.log ( 'randomYear ERROR', error )
		return `randomYear ERROR  ${error}`
	}
}