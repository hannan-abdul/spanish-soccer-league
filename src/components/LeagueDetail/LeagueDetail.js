import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import maleImage from '../../images/Photo/male.png';
import './LeagueDetai.css'
import SocialIcon from '../SocialIcon/SocialIcon';

const LeagueDetail = () => {
    const { idTeam } = useParams();
    const [league, setLeague] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.teams[0]))
    }, [])
    return (
        <div className="container">
            <div className="header-fix">
                <div className="logo-position">
                    <img src={league.strTeamBadge} alt="banner"/>
                </div>
            </div>
            <div className="row team-details-row">
                <div className="col team-details">
                    <h2>{league.strLeague}</h2>
                    <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {league.intFormedYear}</h6>
                    <h6><FontAwesomeIcon icon={faFlag} /> Country: {league.strCountry}</h6>
                    <h6><FontAwesomeIcon icon={faFutbol} /> Sports Type: {league.strSport}</h6>
                    <h6><FontAwesomeIcon icon={faMars} /> Gender: {league.strGender}</h6>
                </div>
                <div className="col">
                    {/* if({league.strGender} === male){
                        <img className='gender-image' src={maleImage} alt=""/>
                    } */}
                    <img className='gender-image' src={maleImage} alt=""/>
                </div>
            </div>
            <div className="more-details">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <SocialIcon></SocialIcon>
        </div>
    );
};

export default LeagueDetail;