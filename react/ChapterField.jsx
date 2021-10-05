import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Button,
    TextField,
} from '@material-ui/core/'
// import { toggleAgreed } from '../redux/host/actions'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({

	messageField:{
		width: '100%',
	},
	textField:{
		marginBottom: theme.spacing(),
	},
	grow:{
		flexGrow: 1,
	},
	btnTxt:{
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
	heading: {
		// fontWeight: 'lighter',
	},
}))



const validate = ( input ) => {
	return false
}

export default function ChapterField( props ) {
	
	const classes = useStyles() 
	const hostSlice = useSelector( state => state.host )
	const { 
		host,
	} = hostSlice
	
	if ( !host ) return null


	return	<div className={ clsx( classes.messageField ) }>
				<div className={ clsx( classes.textField ) }>
					<TextField 
						id={ `chapterField` }
						className={ clsx( classes.field ) }
			        	label={ `New chapter` }
			        	multiline
			        	rows={ 2 }
			        />
			     </div>

		        <Button
		        	fullWidth={ true }
		        	color={ `secondary` }
		        	variant={ `outlined` }
		        	onClick={ ( e ) => {
		        		e.preventDefault()
		        		console.log ( validate('oi oi') )

		        	}}>
		        	Send chapter
		        </Button>
			</div>
	}





/*
<Checkbox 
	id={ `agree` }
	checked={ agreed } 
	name={ `agree` }
	onClick={ ( e ) => {
		e.preventDefault()
		// console.log ('toggleAgreed', !agreed)
		toggleAgreed( !agreed )
	}} 
/>
*/