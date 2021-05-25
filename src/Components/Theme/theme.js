import React from 'react';
import {useSelector} from "react-redux";
import {grey} from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    card: grey[300],
    background: grey[200],
    primary: {
      main: '#004731',
    },
    secondary: {
      main: '#666',
    }
  },
});

const themeDark = createMuiTheme({
  palette: {
    type: 'dark',
    card: grey[800],
    background: grey[900],
    primary: {
      main: '#004731',
    },
    secondary: {
      main: '#FFF',
    }
  },
});

const Theme = (props) => {
  const { children } = props;

  const darkMode = useSelector(state => state.theme.darkMode)

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
