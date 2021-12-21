import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import footerImg from './job.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='footer-img mx-auto'>
                                <img src={footerImg} />
                            </div>
                        </Col>
                        <Col md={6}>
                            <h2 className='heading text-secondary'>Follow <span className='text-info'>me</span></h2>
                            <ul className='social-links flex-center'>
                                <li><a href="https://facebook.com/in/kingkhan.262/" target="_blank"><FontAwesomeIcon title='facebook' icon={faFacebook} className='icon' /></a></li>
                                <li> <a href="https://instagram.com/in/pathan262/" target="_blank" ><FontAwesomeIcon title='instagram' icon={faInstagram} className='icon' /></a></li>
                                <li> <a href="https://github.com/zahidkhan262" target="_blank" ><FontAwesomeIcon title='github' icon={faGithub} className='icon' /></a></li>
                                <li><FontAwesomeIcon title='twitter' icon={faTwitter} className='icon' /></li>
                            </ul>
                        </Col>
                    </Row>
                    <hr />
                    <p className='text-center text-white-50'>Copyright 2021 &copy; Zahidkhan262. All Right Reserved.</p>
                </Container>
            </footer>
        </>
    )
}

export default Footer
