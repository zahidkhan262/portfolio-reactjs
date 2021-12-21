import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import gitHubRepo from './streak.svg'
import gitHubRepo1 from './gitstats.svg'
import gitHubRepo3 from './language.svg'
import gitHubRepo2 from './repo1.PNG'

const GitRepo = () => {
    return (
        <>
            <div className='gitRepo'>
                <h2 className='heading'>GitHub <span className='text-info'>Repo</span></h2>
                <Container>
                    <Row>
                        <Col md={4} className='mb-2'>
                            <div className='image-slider'>
                                <img src={gitHubRepo} alt="img" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='image-slider'>
                                <img src={gitHubRepo3} alt="img" />
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='image-slider'>
                                <img src={gitHubRepo1} alt="img" />
                            </div>
                        </Col>
                        <Col md={12} className='m-2 text-center'>
                            <div className='image-slider'>
                                <img src={gitHubRepo2} alt="img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default GitRepo
