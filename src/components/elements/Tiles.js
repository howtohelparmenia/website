import React from "react"

export const Tiles = ({ children }) => (
  <div className="tiles">
    { children }
  </div>
)

export const Tile = ({ children }) => (
  <div className="tile">
    { children }
  </div>
)

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
