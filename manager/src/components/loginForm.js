import React,  { Component } from 'react'
import { Card, CardSection, Input, Button, Spinner } from './common'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'

class LoginForm extends Component {

    onEmailChange (text) {
        this.props.emailChanged(text)
    }

    onPasswordChange (text) {
        this.props.passwordChanged(text)
    }

    onButtonPress () {
        const { email, password } = this.props
        this.props.loginUser({email, password})
    }

    renderError () {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}> 
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButtonOrSpinner () {
        if (this.props.loading) {
            return <Spinner size='large' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render () {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.props.email}
                        label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        value={this.props.password}
                        secureTextEntry
                        label='password'
                        placeholder='xxxxxxx'
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    { this.renderButtonOrSpinner()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'red'
    }
}

const matchStateToProps = (state) => {
    const { email, password, error, loading } = state.auth
    return {
        email,
        password,
        error,
        loading
    }
}

export default connect(matchStateToProps, actions)(LoginForm)