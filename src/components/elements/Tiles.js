import React from "react";
import PropTypes from "prop-types";

export const Tiles = ({ children }) => (
  <div className="tiles">
    { children }
  </div>
)

export const Tile = ({ className, children }) => {
  const classNames = `tile ${className}`;
  return (
    <div className={ classNames }>
      { children }
    </div>
  )
}
Tile.propTypes = {
  className: PropTypes.string,
}
Tile.defaultProps = {
  className: '',
}

export const TileTitle = ({ children }) => (
  <div className="tile-title">
    <h2>{ children }</h2>
  </div>
)

export const TileContent = ({ children }) => (
  <div className="tile-content">
    { children }
  </div>
)

export const TileFooter = ({ children }) => (
  <div className="tile-footer">
    { children }
  </div>
)
