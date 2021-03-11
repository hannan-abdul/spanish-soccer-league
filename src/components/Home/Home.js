import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain';
        fetch (url)
        .then(res => res.json())
        .then(data => setLeagues(data.teams.slice(0, 15)))
    },[])
    return (
        <div>
            <Header></Header>
            <h2>All Leagues: {leagues.length}</h2>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        leagues.map(league=> 
                        <div className="col-lg-3 col-md-6 col-sm-12 card card-fix"> 
                            <Leagues league={league}></Leagues>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;