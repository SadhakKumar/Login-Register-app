import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"

export default function homepage(props) {
  return (
    <div className='container'>
        <h3>Hello {props.user.name}!!</h3>
        <p>{props.user.email}</p>
        <Link type="button" className="btn btn-primary" to='/login'>Logout</Link>

    </div>
  )
}
