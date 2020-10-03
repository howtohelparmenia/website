import React from "react"
import PropTypes from "prop-types"

const Hero = ({ id, children }) => {
  return (
    <div id={id} className="container hero">
      <div className="inner">
        {children}
      </div>
    </div>
  )
}

Hero.propTypes = {
  id: PropTypes.string,
}

export default Hero
