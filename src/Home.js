import React from 'react';
import {makeStyles, Box, Hidden, useTheme} from '@material-ui/core'
import VideosBox from './components/VideosBox/VideosBox'
import DrawerComponent from './components/DrawerComponent/DrawerComponent'
import AppToolbar from './components/AppToolbar/AppToolbar'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default
  },
  typography: {
    fontSize: 14
  },
}))

function Home({darkMode, setDarkMode}) {
  const classes  = useStyles()
  const theme = useTheme()
  
  return (
    <div className={classes.root}>
      <AppToolbar darkMode={darkMode} setDarkMode={setDarkMode} theme={theme}/>
      <Box display='flex'>
        <Hidden mdDown>  
          <DrawerComponent />
        </Hidden>
        <VideosBox />
      </Box>
    </div>
  );
}

export default Home;