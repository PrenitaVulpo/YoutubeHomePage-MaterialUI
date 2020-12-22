import React, { useState } from 'react';
import {makeStyles, Box, Hidden, useTheme} from '@material-ui/core'
import VideosBox from './components/VideosBox/VideosBox'
import DrawerComponent from './components/DrawerComponent/DrawerComponent'
import AppToolbar from './components/AppToolbar/AppToolbar'
import LoginDialog from './components/LoginDialog/LoginDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundColor: theme.palette.background.default
  },
  typography: {
    fontSize: 14
  },
}))

function Home({darkMode, setDarkMode}) {
  const classes  = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(true)

  function handleOpen(){
    setOpen(true)
  }

  function handleDrawer(){
    setOpenDrawer(!openDrawer)
  }

  function handleClose(){
    setOpen(false)
  }
  
  return (
    <div className={classes.root}>
      <AppToolbar darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}
      handleOpen={handleOpen} handleDrawer={handleDrawer}/>
      <Box display='flex' minHeight="100vh">
        <Hidden xlDown={!openDrawer}>  
          <DrawerComponent handleOpen={handleOpen}/>
        </Hidden>
        <VideosBox />
        <LoginDialog open={open} handleClose={handleClose} setOpen={setOpen} />
      </Box>
    </div>
  );
}

export default Home;