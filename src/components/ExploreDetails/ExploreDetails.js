import React from 'react';
import './ExploreDetails.css';
import malePic from '../../resources/Photo/male.png';
import femalePic from '../../resources/Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFlag, faFutbol, faMars, faPodcast } from '@fortawesome/free-solid-svg-icons';
import facebook from '../../resources/Icon/Facebook.png';
import twitter from '../../resources/Icon/Twitter.png';
import youtube from '../../resources/Icon/YouTube.png';
import { Container, Jumbotron } from 'react-bootstrap';

const ExploreDetails = (props) => {
    const {strStadiumThumb, strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTwitter,strFacebook,strYoutube } = props.detail;
    
    const bannerStyle = {
        backgroundImage: `url(${strStadiumThumb})`,
        backgroundSize: 'cover',
        height: '100% ',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        
    }
    const backStyle = {
        background: '#0E0A2B',
    }
    const iconStyle = {
        left: '602px',
        maxWidth: '60px'
    }
    let detail;
    return (
        <>
         <Jumbotron fluid style={bannerStyle}>
            <Container>
                <div className ="bg-image col-xs-12 col-md-12 col-sm-12 d-flex justify-content-center " >
                    <img className="img-fluid logo px-2 py-4 " src={strTeamBadge} alt=""/>
                </div>
            </Container>
        </Jumbotron>
          
          <div className="container-fluid" >
             <div className ="row px-5 py-3 " style={backStyle}>
                    <div className="row mx-2 my-4 px-3 py-2 club-card">
                        <div className="col-md-6 sm-6 pl-5 card-txt">
                            <h1>{strTeam}</h1>
                            <p> <FontAwesomeIcon icon={faPodcast} /> Founded : {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} />  Country : {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} />  Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMars} />  Gender : { strGender}</p>
                        </div>

                            <div className="col-md-6 sm-6 px-2">
                                {
                                    // conditional rendering 
                                    <img src={strGender === 'Male' ? malePic : femalePic}
                                    className="img-fluid" alt=""/>
                                }
                        
                            </div>
                    </div>
                    
                    <div className="description px-3">
                        <p>{strDescriptionEN}</p>
                    </div>

                 <footer className ="row d-flex justify-content-center align-items-center " style={{marginTop:'5%'}}>
                        <a href={`https://${strTwitter}`} target="_blank" style ={iconStyle}>
                            <img style={{ maxWidth: '60px'}} src={twitter} alt=""/>
                        </a>
                        <a href={`https://${strFacebook}`} target="_blank" style ={iconStyle}>
                            <img style={{ maxWidth: '60px'}} src={facebook} alt=""/>
                        </a>
                        <a href={`https://${strYoutube}`} target="_blank" style ={iconStyle}>
                            <img style={{ maxWidth: '60px'}} src={youtube} alt=""/>
                        </a>
                 </footer>
              </div>
            </div>
        </>       
        
    );
};

export default ExploreDetails;