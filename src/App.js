import React from 'react';
// import './App.css';
//import own Components
import Navbar from './Components/Navbar'
import SignIn from './Components/SignIn';
//import these three libraries for own coloring
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: blue[500], //visit https://material-ui.com/customization/color/ for more color options
      },
      // secondary: {
      //   // This is green.A700 as hex.
      //   main: '#11cb5f',
      // },
    },
  });



function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <header className="App-header">
        <Navbar/>
        <SignIn/>
      </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
