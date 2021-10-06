import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {
    makeStyles,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
    TextField,
    LinearProgress,
} from '@material-ui/core/'
import { sendChapter } from '../../redux/chapter/actions'
import {
	getPersonById,
} from '../../redux/pingpong/actions'
import { Icon } from '../../theme'

const useStyles = makeStyles(theme => ({
	chapterField:{
		border: 'none',
		boxShadow: 'none',
		background: 'white',
		margin: theme.spacing(),
	},
	textField:{
	},
	grow:{
		flexGrow: 1,
	},
	btnTxt:{
		marginRight: theme.spacing(),
		marginLeft: theme.spacing(),
	},
	paddedHorz: {
		marginLeft: theme.spacing(),
		marginRight: theme.spacing(),
	},
}))


export default function ChapterField( props ) {
	
	let defaultValue = ``
	const classes = useStyles() 
	const [ value, setValue] = React.useState( defaultValue )
	const [ valid, setValid] = React.useState( false )
	const hostSlice = useSelector( state => state.host )
	const chapterSlice = useSelector( state => state.chapter )
	const pingpongSlice = useSelector( state => state.pingpong )
	
			
	let toName = ``
	let toAvatar = ``

	const { 
		host,
	} = hostSlice
	if ( !host ) return null
	
	let { 
		person,
		selectedId,
	} = pingpongSlice
	if (selectedId){
		person = getPersonById( selectedId )
	}
	if ( person ){
		toAvatar = person.avatar
		toName = person.displayName
	}
	
	const validate = ( str ) => {
		setValue( str )
		if ( str.length > 2) {
			return setValid(true)
		} else {
			return setValid(false)
		}
	}

	const { 
		sending,
	} = chapterSlice
	if (sending) return <Card className={ clsx( classes.chapterField ) }>
							<CardHeader 
								avatar={ <Avatar src={ toAvatar } /> }
								title={ `${ toName }` }
							/>
							<CardContent>
								<LinearProgress color={ `secondary` } />
							</CardContent>
						</Card>

	return	<Card className={ clsx( classes.chapterField ) }>
				<CardHeader 
					avatar={ <Avatar src={ toAvatar } /> }
					title={ `${ toName }` }
				/>
				<CardContent>
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
		        
		        
		        </CardContent>

		        <CardActions className={ clsx( classes.paddedHorz ) }>
		        	<div className={ clsx( classes.grow ) } />
		        	<Button
			        	disabled={ !valid }
			        	color={ `secondary` }
			        	variant={ `text` }
			        	onClick={ ( e ) => {
			        		e.preventDefault()
			        		sendChapter ( value )
			        		setValue( `` )
			        	}}>
			        	<span className={ clsx( classes.btnTxt ) }>
			        		Speak.
			        	</span>
			        	<Icon icon={ `talk` } color={ `secondary` } />
			        </Button>
		        </CardActions>
			</Card>
	}





/*

<pre>
		        	{ JSON.stringify( chapter, null, 2) }
		        </pre>

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