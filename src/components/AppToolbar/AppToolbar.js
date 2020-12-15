import { AppBar, Button, IconButton, makeStyles, Switch, Toolbar} from '@material-ui/core'
import React, { useState } from 'react'
import {connect} from 'react-redux' 
import * as LoginAction from '../../store/actions/login'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon  from '@material-ui/icons/AccountCircle'
import AppsIcon  from '@material-ui/icons/Apps'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import VideoCallIcon  from '@material-ui/icons/VideoCall'
import LoginDialog from '../LoginDialog/LoginDialog'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  textBox:{
    marginBottom: theme.spacing(4)
  },
  menuButton: {
    paddigRight: theme.spacing(5),
    paddingLeft: theme.spacing(6)
  },
  logo: {
    height: 25,
    paddingLeft: theme.spacing(3)
  },
  icons:{
    paddingRight:theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  },
}))


const AppToolbar = ({darkMode, setDarkMode, theme, isLogged, dispatch, handleOpen}) =>{
  const classes  = useStyles()

  function handleLoggout(){
    dispatch(LoginAction.toggleLogin(false))
  }


  return(
    <div className={classes.root}>
      <AppBar color="inrerit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src={theme.palette.type === "dark" ? "images/branco.png" 
            : "images/preto.png"} alt="logo" className={classes.logo}/>
          <div className={classes.grow}/>
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}>
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons}>
            <MoreVertIcon />
          </IconButton>
          {!isLogged ? 
            <Button startIcon={<AccountCircleIcon/>} variant="outlined" color="inherit"
            onClick={handleOpen}>
              Fazer Login
            </Button> 
            : 
            <Button startIcon={<AccountCircleIcon/>} variant="outlined" color="inherit"
            onClick={handleLoggout}>
              Loggout
            </Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default connect(state => ({
  isLogged: state.isLogged
}))(AppToolbar)