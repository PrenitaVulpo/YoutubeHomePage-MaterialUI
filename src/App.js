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
      dark: darkMode ? '#181818' : '#fff',
      default: darkMode ? '#232323' : '#f4f6f8',
      paper: darkMode ? '#232323' : '#fff',
    },
  })
   
  return (
     <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
