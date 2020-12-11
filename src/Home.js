import React from 'react';
import {Button, AppBar, IconButton, makeStyles, Toolbar, 
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, 
  Box, Typography, ListSubheader, Hidden, useTheme, Switch} from '@material-ui/core'
import videos from './assets/videos'
import VideosBox from './components/VideosBox/VideosBox'

import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon  from '@material-ui/icons/AccountCircle'
import AppsIcon  from '@material-ui/icons/Apps'
import MoreVertIcon  from '@material-ui/icons/MoreVert'
import VideoCallIcon  from '@material-ui/icons/VideoCall'
import HomeIcon from '@material-ui/icons/Home'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import { AccountCircle, Whatshot, Subscriptions } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default
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
  },
  typography: {
    fontSize: 14
  },
  
}))

function Home({darkMode, setDarkMode}) {
  const classes  = useStyles()
  const theme = useTheme()
  const iconsList1 = [<HomeIcon/>, <Whatshot/>, <Subscriptions/>]
  const iconsList2 = [<VideoLibraryIcon/>, <HistoryIcon/>]
  
  return (
    <div className={classes.root}>
      <AppBar color='inrerit' className={classes.appBar}>
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
          <Button startIcon={<AccountCircleIcon/>} variant="outlined" color="inherit">
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Hidden mdDown>  
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
                  <Button size="large" variant="outlined" color="secondary"
                  startIcon={<AccountCircle/>}>
                    Fazer Login
                  </Button>
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
        </Hidden>
        <VideosBox videos={videos}/>
      </Box>
    </div>
  );
}

export default Home;