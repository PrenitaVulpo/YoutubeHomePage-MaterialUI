import { makeStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider,
  Typography, ListSubheader, Toolbar, Box, Button} from '@material-ui/core'
import React from 'react'
import * as LoginAction from '../../store/actions/login'
import {connect} from 'react-redux' 

import HomeIcon from '@material-ui/icons/Home'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { AccountCircle, Whatshot, Subscriptions } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  drawerContainer: {
    overflow: 'auto',
  },
  listItem: {
    paddingBottom: 4,
    paddingTop: 4,
  },
  listItemText: {
    fontSize: 14,
  },
}))

const DrawerComponent = ({isLogged, dispatch, handleOpen}) =>{
  const classes  = useStyles()
  const iconsList1 = [<HomeIcon/>, <Whatshot/>, <Subscriptions/>]
  const iconsList2 = [<VideoLibraryIcon/>, <HistoryIcon/>]

  function handleLoggout(){
    dispatch(LoginAction.toggleLogin(false))
  }

  return(
    <Drawer
      className={classes.drawer} variant="permanent"
      classes={{
        paper: classes.drawerPaper,
    }}>
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {['Início', 'Em alta', 'Inscrições'].map((text, index) => (
            <ListItem button classes={{root:classes.listItem}} key={text} >
              <ListItemIcon>{iconsList1[index]}</ListItemIcon>
              <ListItemText primary={text} classes={{
                primary: classes.listItemText
              }} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Biblioteca', 'Histórico'].map((text, index) => (
            <ListItem button key={text} classes={{root:classes.listItem}}>
              <ListItemIcon>{iconsList2[index]}</ListItemIcon>
              <ListItemText primary={text} classes={{
                primary: classes.listItemText
              }}/>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box p={7}>
          <Typography variant="body2">
            Faça login para curtir vídeo, comentar e se inscrever
          </Typography>
          <Box >
            {!isLogged ?
              <Button size="large" variant="outlined" color="secondary"
              startIcon={<AccountCircle/>} onClick={handleOpen}>
                Fazer Login
              </Button>
              :
              <Button size="large" variant="outlined" color="secondary"
              startIcon={<AccountCircle/>} onClick={handleLoggout}>
                Loggout
              </Button>
            }
          </Box>
        </Box>
        <Divider />
        <List>
          <ListSubheader>O MELHOR DO YOUTUBE</ListSubheader>
          {['Música', 'Esportes', 'Jogos', 'Etc (cansei de por mais coisas'].map((text, index) => (
            <ListItem button classes={{root:classes.listItem}} key={text} >
              <ListItemIcon><AddCircleIcon/></ListItemIcon>
              <ListItemText primary={text} classes={{
                primary: classes.listItemText
              }} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default connect(state => ({
  isLogged: state.isLogged
}))(DrawerComponent)