import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//styling is made for whole app!
//import these three libraries for own coloring
// import { createMuiTheme } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
// import { blue } from '@material-ui/core/colors';

// const theme = createMuiTheme({
//     palette: {
//       primary: {
//         // Purple and green play nicely together.
//         main: blue[500], //visit https://material-ui.com/customization/color/ for more color options
//       },
//       secondary: {
//         // This is green.A700 as hex.
//         main: '#11cb5f',
//       },
//     },
//   });

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    {/* <ThemeProvider theme={theme}> */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    {/* </ThemeProvider>   */}
    </div>
  );
}
