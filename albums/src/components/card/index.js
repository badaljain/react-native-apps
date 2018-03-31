import React, { Component } from 'react'
import { View, Text, Linking } from 'react-native'
import CardSection from './cardSection'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import CardFooter from './cardFooter'

class Card extends Component {
    constructor (props) {
        super(props)
    }

    onClickBuy = () => {
        const { album } = this.props
        Linking.openURL(album.url)
    }

    render() {
        const { containerStyle } = styles
        const { album } = this.props
        return (
            <View style={ containerStyle }> 
                <CardHeader album={album} />
                <CardBody album={album} />
                <CardFooter onClickBuy={this.onClickBuy}/>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export default Card