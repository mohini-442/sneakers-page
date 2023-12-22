import React from 'react'
import Shoecards from './Shoecards'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { CardHeaderProps } from 'react-bootstrap'

const Shoecardsection = () => {
    return (
        <div>
            <Container className='py-5'>
                <Card.Header className='color-black fw-semibold fs-2xl ff-poppins'>RELATED PRODUCT</Card.Header>
                <Shoecards />
                <div class="d-flex justify-content-end align-items-center gap-3 pt-5 pb-lg-5 mb-3">
                    <a href="" class="btn2 fs-lg ff-poppins  lh-125 fw-semibold">1</a>
                    <a href="" class="btn2 fs-lg ff-poppins  lh-125 fw-semibold">2</a>
                    <a href="" class="btn2 fs-lg ff-poppins  h-125 fw-semibold">3</a>
                    <div className='gap-1 d-flex align-items-center justify-content-center'>
                        <a href="" class="nextbtn ff-poppins fs-s fw-normal color-grey">Next &gt;&gt; </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Shoecardsection
