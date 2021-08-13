/*
import logo from './logo.svg';
*/

import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer';
import './App.css';

//changes to imports 
import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#222222"
    },
    secondary: {
      main:"#77777", 
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "3rem"
  },
  littleSpace:{
    marginTop: "1.5rem",
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();
  const iconSize = "3em";

  return (
    <div classname="App">
      <ThemeProvider theme={theme}>
        <NavBar />

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
            Something interesting !
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            much more little interestring things, like why this is interesting and how and for whom and all kind of little informations like that.
          </Typography>
        </div>

        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<SecurityIcon style={{fill: "#A7A720", height:iconSize, width:iconSize}}/>} title="t1" buttonTitle="Show me more" />
          <Grid icon={<EventNoteIcon style={{fill: "#B7B740", height:iconSize, width:iconSize}}/>} title="t2" buttonTitle="Show me more" />
          <Grid icon={<TrendingUpIcon style={{fill: "#C7C760", height:iconSize, width:iconSize}}/>} title="t3" buttonTitle="Show me more" />
        </div>
        <div className={`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon={<ImportExportIcon style={{fill: "#D7D780", height:iconSize, width:iconSize}}/>} title="t4" buttonTitle="Show me more" />
          <Grid icon={<ComputerIcon style={{fill: "#E7E720", height:iconSize, width:iconSize}}/>} title="t5" buttonTitle="Show me more" />
          <Grid icon={<HttpIcon style={{fill: "#F7F700", height:iconSize, width:iconSize}}/>} title="t6" buttonTitle="Show me more" />
        </div>

        <div className={classes.bigSpace}>
          <Footer/>
        </div>

      </ThemeProvider>
    </div>
  )
}

export default App;
