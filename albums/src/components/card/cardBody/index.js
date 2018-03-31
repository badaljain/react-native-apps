import React from 'react'
import { Text, View, Image }  from 'react-native'
import CardSection from '../cardSection'

const CardBody = ({ album }) => {
    const { image } = album
    const { cardContent, imageStyle } = styles
    return (
        <CardSection>
            <Image 
                style={imageStyle}
                source={{uri: image}} 
            />
        </CardSection>
    )
}

const styles = {
    cardContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    imageStyle: {
        height: 300,
        width: null,
        flex: 1
    }
}

export default CardBody