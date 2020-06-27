import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import AppContainer from './redux/containers/appContainer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
  , document.getElementById('root')
)
serviceWorker.unregister();
