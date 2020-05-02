import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <nav className="navbar navbar-light text-white bg-dark">
      <h1>
        <a className="navbar-brand text-white" href="#test">
          {props.name}
        </a>
      </h1>
    </nav>

  )
}

Header.propTypes = {
  name: PropTypes.string
}

export default Header
