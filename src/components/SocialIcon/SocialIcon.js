import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './SocialIcon.css';

const SocialIcon = () => {
    return (
        <div className="container">
            <div className='social-icon'>
                <Link className="social-link"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
                <Link className="social-link"><FontAwesomeIcon icon={faTwitterSquare} /></Link>
                <Link className="social-link"><FontAwesomeIcon icon={faYoutubeSquare} /></Link> 
            </div>
        </div>
    );
};

export default SocialIcon;