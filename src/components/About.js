import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import bgImge from './zahiddp.jpeg';
import bgBack from './backDots.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
const About = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className='position-relative' >
                        <div className='about-imgs flex-center'>
                            <img src={bgImge} alt="bg-img" />
                        </div>
                        <img src={bgBack} alt="bg-dots" className='back-dots' />
                    </Col>
                    <Col md={6} >
                        <div className='about'>
                            <h2 className='heading'>About <span className='text-info'>me</span></h2>

                            <h4 className='text-secondary mb-4'>Hello my name is Zahid khan</h4>
                            <div className='description'>
                                <p>
                                    Hi! My name is Zahid Khan. I'm a self-taught Front-end Developer who is passionate about learning new technologies & I have knowledge of ReactJs which is javascript library. I'm an UI design enthusiast. I believe we never stop learning, so I work hard to expand my skill set and stay updated.
                                </p>
                            </div>

                            <ul className='social-links'>
                                <li><a href="https://facebook.com/in/kingkhan.262/" target="_blank"><FontAwesomeIcon title='facebook' icon={faFacebook} className='icon' /></a></li>
                                <li> <a href="https://instagram.com/in/pathan262/" target="_blank" ><FontAwesomeIcon title='instagram' icon={faInstagram} className='icon' /></a></li>
                                <li> <a href="https://github.com/zahidkhan262" target="_blank" ><FontAwesomeIcon title='github' icon={faGithub} className='icon' /></a></li>
                                <li><FontAwesomeIcon title='twitter' icon={faTwitter} className='icon' /></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About
