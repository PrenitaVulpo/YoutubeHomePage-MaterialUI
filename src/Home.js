import React from 'react';
import {Button, AppBar, IconButton, makeStyles, Toolbar, 
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon  from '@material-ui/icons/AccountCircle'

import AppsIcon  from '@material-ui/icons/Apps'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import VideoCallIcon  from '@material-ui/icons/VideoCall'
import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,

  },
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
  }
}))

function Home() {
  const classes = useStyles()
  const icons1 = [<HomeIcon/>, <Whatshot/>, <Subscriptions/>]
  const icons2 = [<VideoLibraryIcon/>, <HistoryIcon/>]
  
  return (
    <div className={classes.root}>
      <AppBar color='inrerit' className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src="images/preto.png" alt="logo" className={classes.logo}/>
          <div className={classes.grow}/>
          <IconButton className={classes.icons} color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button startIcon={<AccountCircleIcon/>} variant="outlined" color="inherit">
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
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
                <ListItemIcon>{icons1[index]}</ListItemIcon>
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
                <ListItemIcon>{icons2[index]}</ListItemIcon>
                <ListItemText primary={text} classes={{
                  primary: classes.listItemText
                }}/>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default Home;