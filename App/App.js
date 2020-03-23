import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Redux'
import RootScreen from './Screens/RootScreen'

const { store } = createStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootScreen />
      </Provider>
    )
  }
}
