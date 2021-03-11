import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import maleImage from '../../images/Photo/male.png';
import femaleImage from '../../images/Photo/female.png';
import './LeagueDetail.css';
import SocialIcon from '../SocialIcon/SocialIcon';

const LeagueDetail = () => {
    const { idTeam } = useParams();
    const [league, setLeague] = useState({})
    const {intFormedYear, strCountry, strSport, strGender, strTeamBadge, strLeague,} = league;
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.teams[0]))
    }, [idTeam])
    
    let image;
    if (strGender === "Male"){
        image = <img className='gender-image' src={maleImage} alt="male"/>
    }
    else{
        image = <img className='gender-image' src={femaleImage} alt="female"/>
    }

    return (
        <div className="container">
            <div className="header-fix">
                <div className="logo-position">
                    <img src={strTeamBadge} alt="badge"/>
                </div>
            </div>
            <div className="row team-details-row">
                <div className="col-lg-6 col-md-6 col-sm-12 team-details">
                    <h2>{strLeague}</h2>
                    <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h6>
                    <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                    <h6><FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</h6>
                    <h6><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h6>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {image}
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