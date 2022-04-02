import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
function Footer() {
  return (
    <div className="footer-copyright text-center py-3 custom-footer">© 2022 Copyright:
    <Link to="/"> ManEdgeIt.com</Link></div>
  )
}

export default Footer