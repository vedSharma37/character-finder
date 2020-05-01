import React from 'react';

const CharacterTile = props => {

    return(
        <div className="col-md-4">
            <div className="character-tile-box">
                <div className="avatarImg">
                    <picture>
                        <img src={props.details.image} title={props.details.name} alt={props.details.name} />
                        <div className="char-personal-detail">   
                        <h3>{props.details.name}</h3>
                        <div className="created-time">
                        Id : { props.details.id} | {props.details.created}

                        </div>
                    </div> 
                    </picture>
                </div>    
                <div className="charc-details">
                    <div className="more-info">
                        <ul>
                            <li><span className="lable"> Status</span> <span>{props.details.status}</span></li>
                            <li><span className="label"> Species</span> <span>{props.details.species}</span></li>
                            <li><span className="label"> Gender</span> <span>{props.details.gender}</span></li>
                            <li><span className="label"> Origin</span> <span>{props.details.origin.name}</span></li>
                            <li><span className="label"> Last Location</span> <span>{props.details.origin.name}</span></li>
                        </ul>
                    </div>
            </div>
            </div>
        </div>
    )
}



export default CharacterTile;