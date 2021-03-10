import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';

const Leagues = (props) => {
    const {idLeague, strLeague, strSport} = props.league;

    const history = useHistory();
    const exploreLeague = (idLeague) =>{
        const url = `/league/${idLeague}`;
        history.push(url)
    }
    return (
        <div>
            <h3>{strLeague} </h3>
            <h5>Sports Type: {strSport} </h5>
            <button className="btn-primary" onClick={()=>exploreLeague(idLeague)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
    );
};

export default Leagues;