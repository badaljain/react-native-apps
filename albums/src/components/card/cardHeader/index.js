import React from 'react'
import { Text, View, Image }  from 'react-native'
import CardSection from '../cardSection'

const CardHeader = ({ album }) => {
    const { title, artist, thumbnail_image } = album
    const { thumbnailStyle, headerContent, thumbnailContainer, headerText } = styles
    return (
        <CardSection>
            <View style={thumbnailContainer}>
                <Image 
                    style={thumbnailStyle}
                    source={{uri: thumbnail_image}} 
                />
            </View>
            <View style={headerContent}>
                <Text style={headerText}> { title } </Text>
                <Text> { artist } </Text>
            </View>
        </CardSection>
    )
}

const styles = {
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}

export default CardHeader