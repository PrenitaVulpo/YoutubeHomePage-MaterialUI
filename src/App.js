import React from 'react'
import {createMuiTheme, ThemeProvider} from '@material-ui/core'
import Home from './Home.js'



function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336'
      }
    }
  })
   
  return (
     <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
