import React from 'react';


const Header = props => {

    return (
        <nav className="navbar navbar-light text-white bg-dark">
          <a className="navbar-brand text-white" href="#">
            {props.name}
          </a>
        </nav>

    )
}

export default Header