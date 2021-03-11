import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam';

const Team = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams.slice(0,14)))
       
    }, [])
     console.log(setTeams)
    
    const backStyle = {
        background:'#0E0A2B'
    }
 return (
     <section >
          <div className="container-fluid"> 
                <div className ="row px-5 py-3" style={backStyle}> 
                    {
                        teams.map((team) => <SingleTeam key={team.strTeam} team={team}></SingleTeam> )
                    }
                </div>
            
            </div>
     </section>   
    );
};

export default Team;