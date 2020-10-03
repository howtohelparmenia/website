import React from "react"
import PropTypes from "prop-types"

const Container = ({ id, children }) => {
  return (
    <div id={id} className="container">
      <div className="inner">
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  id: PropTypes.string,
}

export default Container
