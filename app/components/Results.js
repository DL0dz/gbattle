import React, { PropTypes } from 'react'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import { Link } from 'react-router'
import { parentButtons, buttonReturn } from '../styles'
import Loading from './Loading'

function StartOver () {
  return (
    <div style={parentButtons}>
      <Link to='/playerOne'>
        <button style={buttonReturn} >Start over</button>
      </Link>
    </div>
  )
}

const Result = props => {
  if (props.isLoading) {
    return <Loading text={'And the winner is'} speed={600} />
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <div>
        <h1>It's a tie !</h1>
        <StartOver />
      </div>
    )
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  const losingIndex = winningIndex === 0 ? 1 : 0
  return (
    <div>
      <h1>Result</h1>
      <div style={parentButtons}>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </div>
  )
}

Result.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Result
