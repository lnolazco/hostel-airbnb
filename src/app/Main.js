/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Menu from './components/menu';
import DemoCarousel from './components/carousel';
import Reviews from './components/reviews';
import Booking from './components/booking';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
          <div>
              <DemoCarousel />
              <Menu />
              <Booking />
              <Reviews />
          </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
