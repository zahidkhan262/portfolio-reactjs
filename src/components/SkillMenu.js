import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCode, faDatabase, faDesktop, faServer } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import skillData from './skillImage';


const SkillMenu = ({ setData }) => {



    const handleTech = (techItem) => {
        const filterData = skillData.filter((curEle) => {
            return curEle.category === techItem;
        })
        setData(filterData);
        // console.log(setData(filterData))
    }
    return (
        <div className='menu-skill'>
            <ul className='menu-ul'>
                <li onClick={() => setData(skillData)}><FontAwesomeIcon icon={faCode} /> ALL</li>
                <li onClick={() => handleTech('front')}><FontAwesomeIcon icon={faCode} /> Frontend</li>
                <li onClick={() => handleTech('frame')}><FontAwesomeIcon icon={faDesktop} /> Framework</li>
                <li onClick={() => handleTech('library')}><FontAwesomeIcon icon={faBook} /> Library</li>
                <li onClick={() => handleTech('backend')}><FontAwesomeIcon icon={faServer} /> Backend</li>
                <li onClick={() => handleTech('database')}><FontAwesomeIcon icon={faDatabase} /> Database</li>
                <li onClick={() => handleTech('version')}><FontAwesomeIcon icon={faGitAlt} /> Version Control</li>
            </ul>
        </div>
    )
}

export default SkillMenu
