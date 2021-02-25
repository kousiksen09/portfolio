import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import theme from './utils/theme';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Kousik from './views/Kousik';
import { SemipolarLoading } from 'react-loadingg';

const styles = () => ({
  root: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  }, [loading]);

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        {loading ? (
          <SemipolarLoading size='large' color='#f0da16' />
        ) : (
          <Kousik />
        )}
      </Provider>
    </MuiThemeProvider>
  );
}

export default withStyles(styles, { withTheme: true })(App);
