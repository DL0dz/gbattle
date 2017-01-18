import React from 'react'
import Results from '../components/Results'
import githubHelpers from '../utils/githubHelpers'

export default React.createClass({
  getInitialState () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount () {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(scores => {
        this.setState({
          isLoading: false,
          scores
        })
      })
  },
  render () {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo} />
    )
  }
})
