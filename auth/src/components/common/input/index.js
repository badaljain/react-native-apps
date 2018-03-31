import React from 'react'
import { View, Text, TextInput } from 'react-native'

export const Input = ({ label, value, onChangeText, placenholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> { label } </Text>
            <TextInput 
                value={value}
                onChangeText={onChangeText}  
                style={inputStyle}
                autoCorrect={false}
                placeholder={placenholder}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

//Flex = this property onder the same siblings add up and the divide and aloocate the proportion of space.
// for ex: input style + label style has flex of 3 intotal
// input occupies 2 i.e 2/3rd of space and label occupies 1/3 of space.
const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}