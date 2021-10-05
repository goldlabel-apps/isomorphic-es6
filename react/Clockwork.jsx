import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { 
  makeStyles,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core'
import { Icon } from '../../theme'
import moment from 'moment'
// import {
//   // clockworkTick,
//   clockworkStart,
// } from '../redux/app/actions'

const useStyles = makeStyles((theme) => ({ 
  clockwork: {
    margin: theme.spacing(),
  },
}))

export default function Clockwork() {

  const classes = useStyles()
  const [ open, setOpen ] = React.useState( false )
  const appSlice = useSelector( state => state.app )

  React.useEffect(() => {
    const { 
      timing, 
    } = appSlice
    console.log( 'timing', timing )
    // if ( !timing ) clockworkStart()
    // setTimeout( () => {
    //   clockworkTick()
    // }, 2000)
  }, [ appSlice ])

  const {
    timerStarted,
    timing,
    time,
  } = appSlice

  let hide = true
  if ( hide ) return null
  
  if ( !open ) return <IconButton
                        onClick={ ( e ) => {
                          e.preventDefault()
                          setOpen( true )
                        }}>
                      <Icon icon={ `clockwork` } color={ `primary` }/>
                     </IconButton>

  return <Card className={ clsx( classes.clockwork ) }>
            <CardHeader 
              avatar={ <Icon icon={ `clockwork` } color={ `primary` }/>  }
              title={ `Clockwork` }
              action={<IconButton
                        onClick={ ( e ) => {
                          e.preventDefault()
                          setOpen( false )
                        }}>
                      <Icon icon={ `close` } color={ `primary` }/>
                     </IconButton>}
            />
            <CardContent>
              <Typography>
                timerStarted { moment(timerStarted).fromNow() }
              </Typography>
              
              <Typography>
                timing { timing.toString() }
              </Typography>

              <Typography>
                time { time }
              </Typography>


            </CardContent>
          </Card>
}