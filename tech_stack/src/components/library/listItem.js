import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'
import CardSection from '../common/cardSection'
import * as actions from './actions'

class ListItem extends Component {

    componentWillUpdate () {
        LayoutAnimation.easeInEaseOut()
    }

    renderDescription () {
        const { expanded, library } = this.props

        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>{ library.description }</Text>
                </CardSection>
            )
        }
    }

    render () {
        const { titleStyle } = styles
        const { id, title } = this.props.library
        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}> { title } </Text>
                    </CardSection>
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

//ownprops is same as this.props for the component
// lets use this to see if we want to show description
const mapStateToProps = (state, ownProps) => {
    return {
        expanded: state.library.selectedLibrary === ownProps.library.id
    }
}

export default connect(mapStateToProps, actions)(ListItem)