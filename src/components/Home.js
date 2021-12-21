import React from 'react'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import bgImge from './zahiddp.jpeg';
import resume from './zahidkhan.pdf'

const Home = () => {
    return (
        <>
            <div className='main-page text-center'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='bg-imgs'>
                                <img src={bgImge} alt="bg-img" />
                            </div>
                        </Col>
                        <Col md={6} className='flex-center'>
                            <div className='bg-details'>
                                <h3>Zahid khan</h3>
                                <h1>I'm a <span className='text-info'>Cr</span>eative</h1>
                                <ul className='change-text'>
                                    <li><span>Developer</span></li>
                                    <li><span>Designer</span></li>
                                    <li><span>Coder..</span></li>
                                </ul>
                                <div className='resume-btn'>
                                    <a href={resume} download={resume} ><button className='btn-1'>Download CV <FontAwesomeIcon icon={faDownload} /></button></a>
                                    <a href="https://github.com/zahidkhan262" target="_blank" ><button className='btn-1'>Github</button></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Home
