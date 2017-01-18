import React from 'react'
import { transparentBg } from '../styles'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>Who is the best on Github ?</p>
        <Link to='/playerOne'>
          <button>Get started</button>
        </Link>
      </div>
    )
  }
})
