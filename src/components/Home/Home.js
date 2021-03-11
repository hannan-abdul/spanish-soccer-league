import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import './Home.css'

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch (url)
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0, 15)))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        teams.map(team=> 
                        <div className="col-lg-3 col-md-6 col-sm-12 card card-fix"> 
                            <Teams team={team}></Teams>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;