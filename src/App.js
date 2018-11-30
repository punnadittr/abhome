import React, { Component } from 'react';
import Mainpage from './components/MainPage';
import './App.css';
import './Cursor.scss';
import Navbar from './components/Navbar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#00314E'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#F4CF3A',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff'
    }
    // error: will use the default color
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: 'ThaiSans Neue',
    useNextVariants: true
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navbar />
          <Mainpage windowWidth={this.state.width} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
