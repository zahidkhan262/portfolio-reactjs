import React, { useState } from 'react';
// import { Carousel } from '@trendyol-js/react-carousel';
import skillData from './skillImage';
import { Container, Row, Col } from 'react-bootstrap';
import SkillMenu from './SkillMenu';

const Skill = () => {
    const [data, setData] = useState(skillData);
    return (
        <>
            <div className='skill'>
                <h2 className='heading text-secondary'>My Skill <span className='text-info'>Set</span></h2>
                <Container>
                    <Row>
                        <Col md={4}>
                            <SkillMenu setData={setData} />
                        </Col>
                        <Col md={8}>
                            <Col md={12}>
                                <Row>
                                    {
                                        data.map(skills => {
                                            // const { id, title, category, bg_color, skill_img } = skills;
                                            return (
                                                <>
                                                    <Col md={6} xs={6}>
                                                        <div className='slider-skill' style={{ background: skills.bg_color }}>
                                                            <div className='skill-card'>
                                                                <img src={skills.skill_img} alt="image" />
                                                            </div>
                                                            <div className='skill-title'>
                                                                <h3>{skills.title}</h3>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </>
                                            )
                                        })
                                    }
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Skill