import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { FavorListProvider } from './contexts/FavorListContext'
import { FavorProvider } from './contexts/FavorContext'
import App from './components/App/App'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <FavorListProvider>
      <FavorProvider>
        <App />
      </FavorProvider>
    </FavorListProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
