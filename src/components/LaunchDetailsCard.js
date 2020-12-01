import React from 'react';

export const LaunchDeatilsCard = ({flight_number, mission_name, mission_id, launch_year, launch_success, rocket, links}) =>{
    return (
        <div className="launch-details">
            <div className="patch">
                {
                    links.mission_patch ? 
                    <img src={links.mission_patch} alt="Badge"className="img" height="200"></img> : 
                    <img src={links.flickr_images[0]} alt="Badge"className="img" height="200"></img>
                }
            </div>
            <div className="row launch-heading"><h3>{`${mission_name} #${flight_number}`}</h3></div>
            <div className="mission-id">
                <div className="heading">Mission Ids:</div>
                {   
                    mission_id.lngth>0 ? 
                    (<ul>
                        {mission_id.map(id=>{
                            return <li key={id}>{id}</li>
                        })}
                    </ul>) :
                    (<ul><li>NA</li></ul>)
                }
            </div>
            <div className="launch-year">
                <div className="heading">Launch-Year:</div>
                <div className="content">{launch_year}</div>
            </div>
            <div className="launch-success">
                <div className="heading">successful Launch:</div>
                <div className="content">{launch_success ? launch_success.toString() : "false"}</div>
            </div>
            <div className="landing-success">
                <div className="heading">successful Landing:</div>
                <div className="content">{rocket.first_stage.cores[0].land_success ? rocket.first_stage.cores[0].land_success.toString() : "false"}</div>
            </div>
        </div>
    )
}

export default LaunchDeatilsCard;