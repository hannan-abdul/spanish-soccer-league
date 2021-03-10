import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import './Leagues.css'

const Leagues = (props) => {
    const {idTeam, strTeamBadge, strLeague, strSport} = props.league;

    const history = useHistory();
    const exploreLeague = (idTeam) =>{
        const url = `/league/${idTeam}`;
        history.push(url)
    }
    return (
        <div>
            <img className="logo-resize" src={strTeamBadge} alt="logo"/>
            <h4>{strLeague} </h4>
            <h6>Sports Type: {strSport} </h6>
            <button className="btn-primary" onClick={()=>exploreLeague(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Leagues;