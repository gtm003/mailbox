import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './assets/styles/index.scss';

import App from './components/App/App';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    secondary: {
      main: '#fff',
      dark: '#ccc',
      light: '#fff',
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
