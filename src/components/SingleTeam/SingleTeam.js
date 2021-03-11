import React from 'react';
import { useHistory } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleTeam = (props) => {
    const { strTeam,idTeam, strTeamBadge,strSport } = props.team;
    // console.log(props.team)
    const history = useHistory();
    
    const cardStyle = {
        width: '15rem',
        background: '#e6a2a2',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px'
    }
 return (
       <div className="col-md-4 mb-4 my-3">
            <Card style={cardStyle}>
                <Card.Img  variant="top" src={strTeamBadge} /> 
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{strTeam}</Card.Title>
                        <Card.Text> <h5 style={{color:'black'}}> {strSport} </h5> </Card.Text>
                            <Button as={Link} to={`/team/${idTeam}`} variant="primary"> Explore </Button>
                            
                    </div>
                </Card.Body>
            </Card>
       </div>
    );
};

export default SingleTeam;
