import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import ExploreDetails from '../ExploreDetails/ExploreDetails';
import './TeamDetails.css';

const TeamDetails = () => {
    const {idTeam} = useParams();
    // console.log(idTeam)
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))           
    }, [idTeam])
    
return (
    <>
        <Link className="btn btn-danger btn-rounded d-flex justify-content-center align-items-center" to="/">Back </Link>
        <div className="container my-5">
          <div className="row">
                {
                    team.map(detail=> <ExploreDetails detail={detail}></ExploreDetails>)
                }
          </div>  
        </div>
    </>
    );
};

export default TeamDetails;