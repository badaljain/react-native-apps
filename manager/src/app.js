import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/loginForm'

class App extends Component {

    componentWillMount () {
        const config = {
            apiKey: 'AIzaSyDxTSC2f4XdEx4dihhJ4tYLCZw1bAe4xks',
            authDomain: 'manager-28ad5.firebaseapp.com',
            databaseURL: 'https://manager-28ad5.firebaseio.com',
            projectId: 'manager-28ad5',
            storageBucket: '',
            messagingSenderId: '828598636278'
          }
          firebase.initializeApp(config)
    }

    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App