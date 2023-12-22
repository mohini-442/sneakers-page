import React from 'react'
import Cards from './Cards'
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'

const Section2 = () => {
    return (
        <div>
            <Container className='py-5'>
                <Card.Header className='color-black fw-medium fs-xl ff-poppins'>You can buy the Nike Air Max 97 Men's Shoe - White here:</Card.Header>
                <Cards />
            </Container>
        </div>
    )
}

export default Section2