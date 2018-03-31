import React, { Component } from 'react'
import { View, Text } from 'react-native'
import firebase from 'firebase'
import { Header, Button, Spinner } from './components/common'
import Login from './components/login'

class App extends Component {
    state = { loggedIn: null }

    componentWillMount () {
        firebase.initializeApp({
            apiKey: "AIzaSyA3mpVVQp2fKCqPJfZzD8mscpN6plFn7IY",
            authDomain: "authentication-3b92f.firebaseapp.com",
            databaseURL: "https://authentication-3b92f.firebaseio.com",
            projectId: "authentication-3b92f",
            storageBucket: "authentication-3b92f.appspot.com",
            messagingSenderId: "285883185302"
        })
        //SignIn/signOut state changes will be called here
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({loggedIn : true}) : this.setState({loggedIn : false})
        })
    }

    renderContent = () => {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}> Logout </Button>
            case false:
                return <Login />
            default:
                return <Spinner/>             
        }
    }

    render () {
        return (
            <View>
                <Header title='Authentication'/>
                { this.renderContent() }
            </View>
        )
    }   
}

export default App