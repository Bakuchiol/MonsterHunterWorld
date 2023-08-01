import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <div>
      <h1> ** ERROR 404: PAGE NOT FOUND **</h1>
      <p> Go back to the <Link to='/home'><span>home page</span></Link></p>
    </div>
  )
}

export default NoPage
