import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';

const LeagueDetail = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState({})
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [])
    return (
        <div className="container">
            <img src={league.strBanner} alt="banner"/>
            <div className="row">
                <div className="col">
                    <h2>{league.strLeague}</h2>
                    <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {league.dateFirstEvent}</h4>
                    <h4><FontAwesomeIcon icon={faFlag} /> Country: {league.strCountry}</h4>
                    <h4><FontAwesomeIcon icon={faFutbol} /> Sports Type: {league.strSport}</h4>
                    <h4><FontAwesomeIcon icon={faMars} /> Gender: {league.strGender}</h4>
                </div>
                <div className="col">
                    <img className='w-100' src={league.strBadge} alt=""/>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    );
};

export default LeagueDetail;