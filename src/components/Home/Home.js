import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(()=>{
        const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch (url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
    },[])
    return (
        <div>
            <h2>All Leagues: {leagues.length}</h2>
            <div className="container">
            <div className="row">
                {
                    leagues.map(league=> 
                    <div className="col-lg-3 card p-5 m-2"> 
                        <Leagues league={league}></Leagues>
                        </div>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;