import React, { useState } from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import Home from './Home.js'



function App() {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336'
      }
    },
    background: {
      dark: darkMode ? 'rgb(32,32,32)' : '#fff',
      default: darkMode ? 'rgb(24,24,24)' : '#f4f6f8',
      paper: darkMode ? 'rgb(24,24,24)' : '#fff',
    },
  })
   
  return (
     <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
