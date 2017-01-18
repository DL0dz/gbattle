import React, { PropTypes } from 'react'
import { transparentBg } from '../styles'

const Prompt = props =>
  <div>
    <h1>{props.header}</h1>
    <form onSubmit={props.onSubmitUser}>
      <input
        className='form-control'
        placeholder='Github username'
        type='text'
        onChange={props.onUpdateUser}
        value={props.username}
        autoFocus />
      <button className='button-success' style={transparentBg} type='submit'>
        Continue
      </button>
    </form>
  </div>

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

export default Prompt
