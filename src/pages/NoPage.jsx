import React from 'react'
import { Link } from 'react-router-dom'

function NoPage() {
  return (
    <div id='errorPage'>
      <h1> ** ERROR 404: PAGE NOT FOUND **</h1>
      <p> Go back to the <Link to='/home' className='errorHome'><span>Home page</span></Link></p>
    </div>
  )
}

export default NoPage
