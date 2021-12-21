import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <h2 className='heading'>Contact <span className='text-secondary'>us</span></h2>
                <Container>
                    <Row className='prime'>
                        <Col md={7} sm={12}>
                            <form autoComplete='off'>
                                <h4 className='text-secondary'>Want us to contact you</h4>
                                <p>Leave a message</p>
                                <div className='input-field'>
                                    <input type="text" placeholder='Enter your name...' />
                                </div>
                                <div className='input-field'>
                                    <input type="text" placeholder='Enter your email...' />
                                </div>
                                <div className='input-field'>
                                    <textarea type="text" placeholder='Write here your message...' />
                                </div>
                                <button className='send-btn'>Send</button>
                            </form>
                        </Col>
                        <Col md={5} sm={12}>
                            <div className='contact-us'>Contact us</div>
                            <div className='information'>
                                <p><a><FontAwesomeIcon icon={faMap} /></a>Noida Sector 59, UP India</p>
                                <p><a><FontAwesomeIcon icon={faEnvelope} /></a>zahidkhan007860@gmail.com</p>
                                <p><a><FontAwesomeIcon icon={faPhone} /></a>+91 8874-262-123</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Contact