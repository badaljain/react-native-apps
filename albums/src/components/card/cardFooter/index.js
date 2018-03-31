import React from 'react'
import CardSection from '../cardSection'
import Button from '../../common/button'

const CardFooter = (props) => {
    return (
        <CardSection>
            <Button onPress={props.onClickBuy}>
                Buy Now!
            </Button>
        </CardSection>
    ) 
}

export default CardFooter