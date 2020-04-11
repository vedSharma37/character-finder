import React from 'react';

import CharacterTile from './characterTile';


class CharachterList extends React.Component {

    render(){
        return(

            <div className="charachterList-container">
                <div className="row">
                {this.props.result.map(character => (
                    <CharacterTile key={character.id} details={character} />
                ))}
                </div>
             </div>   
        )
    }
}

export default CharachterList;