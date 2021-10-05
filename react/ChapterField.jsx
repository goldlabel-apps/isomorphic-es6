import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Button,
    TextField,
} from '@material-ui/core/'
import { sendChapter } from '../../redux/chapter/actions'
import { Icon } from '../../theme'

const useStyles = makeStyles(theme => ({
	messageField:{
		margin: theme.spacing(),
	},
	textField:{
		width: '100%',
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


export default function ChapterField( props ) {
	
	let defaultValue = ``
	const classes = useStyles() 
	const [ value, setValue] = React.useState( defaultValue )
	const [ valid, setValid] = React.useState( false )
	const hostSlice = useSelector( state => state.host )
	const chapterSlice = useSelector( state => state.chapter )
	const { 
		sending,
	} = chapterSlice
	if (sending) return <div>sending</div>
	const { 
		host,
	} = hostSlice
	if ( !host ) return null

	const validate = ( str ) => {
		setValue( str )
		if ( str.length > 2) {
			return setValid(true)
		} else {
			return setValid(false)
		}
	}

	return	<div className={ clsx( classes.messageField ) }>
				<div className={ clsx( classes.textField ) }>
					<TextField 
						autoFocus
						fullWidth
						value={ value }
						id={ `chapterField` }
						className={ clsx( classes.field ) }
			        	multiline
			        	rows={ 2 }
			        	variant={ `outlined` }
			        	onChange={  ( e ) => {
			        		e.preventDefault()
			        		validate( e.target.value )
			        		
			        	}}/>
			     </div>
			     <div className={ clsx( classes.grow ) } />
		        
		        <Button
		        	disabled={ !valid }
		        	color={ `secondary` }
		        	variant={ `outlined` }
		        	onClick={ ( e ) => {
		        		e.preventDefault()
		        		sendChapter ( value )
		        	}}>
		        	<Icon icon={ `talk` } color={ `secondary` } />
		        	<span className={ clsx( classes.btnTxt ) }>
		        		Speak.
		        	</span>
		        	
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