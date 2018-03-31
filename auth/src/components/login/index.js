import React, { Component } from 'react'
import { Text } from 'react-native'
import firebase, { auth } from 'firebase'
import { Button, Card, CardSection, Input, Spinner } from '../common'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    handleTextOnchange = (value, field) => {
        this.setState({ [field]: value })
        console.log(this.state)
    }

    onButtonPress = () => {
        const { email, password } = this.state
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSeccess)
            .catch(()=>{
                //Sign in fail -> try to create account for user
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSeccess)
                    .catch(this.onLoginFailure)
            })
    }

    onLoginSeccess = () => {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }

    onLoginFailure = () => {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        })
    }

    render () {
        const { email, password, error, loading } = this.state
        const buttonOrSpinner = (
            loading ? <Spinner size='small' /> : <Button onPress={this.onButtonPress}> Log In </Button>
        )
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        value={email}
                        placenholder='user@gmail.com'
                        type='text'
                        onChangeText={value => this.handleTextOnchange(value, 'email')}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        secureTextEntry={true}
                        value={password}
                        placenholder='xxxxxxxxx'
                        onChangeText={value => this.handleTextOnchange(value, 'password')}
                    />
                </CardSection>

                <Text style={styles.errorStyle} > { error } </Text>
                
                <CardSection>
                    { buttonOrSpinner }
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

export default Login