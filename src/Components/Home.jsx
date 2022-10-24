import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <h1 className='move'>Connect To People Click Here: <Link to="/user" className='first'>User</Link></h1>
    </div>
  )
}

export default Home