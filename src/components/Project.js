import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import allProjects from './ProjectData';



const Project = () => {
    return (
        <>
            <div className='project'>
                <h2 className='heading'>My <span className='text-info'>Projects</span></h2>

                <Container>
                    <Row>
                        {allProjects.map((ele) => {
                            return (
                                <Col md={6} sm={12}>
                                    <div className='project-slider'>
                                        <a href={ele.project_link}><FontAwesomeIcon icon={faEye} className='eye' /></a>
                                        <div className='img-slider'>
                                            <img src={ele.project_img} />
                                        </div>
                                        <div className='project-detail'>
                                            <h3>{ele.project_name}</h3>
                                            <p><strong>Based on : </strong>{ele.based_on}</p>
                                            <p><strong>Watch Live : </strong><a href={ele.project_link}>{ele.project_name}</a></p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default Project