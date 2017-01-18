import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import { parentButtons, buttonReturn } from '../styles'
import Loading from './Loading'

const ConfirmBattle = props => {
  return props.isLoading
    ? <Loading />
    : <div>
        <h1>Battle: </h1>
        <div style={parentButtons}>
          <button type='button' onClick={props.onInitiateBattle}>
            Initiate battle !
          </button>
          <Link to='/playerOne' style={buttonReturn}>
            Reset players name
          </Link>
        </div>
        <div style={parentButtons}>
          <UserDetailsWrapper header='player 1'>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='player 2'>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
  playersInfo: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle
