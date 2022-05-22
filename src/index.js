import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { FeaturesContextProvider } from './store/features-context'
import {store, persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <FeaturesContextProvider>
        <BrowserRouter><App /></BrowserRouter>
      </FeaturesContextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);