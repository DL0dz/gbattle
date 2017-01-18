import React from 'react'
import Prompt from '../components/Prompt'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return {
      username: ''
    }
  },
  handleUpdateUser (e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser (e) {
    e.preventDefault()
    this.setState({
      username: ''
    })
    if (this.props.routeParams.playerOne) {
      // go to battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push({
        pathname: `/playerTwo/${this.state.username}`
      })
    }
  },
  render () {
    return (
      <Prompt
        onUpdateUser={this.handleUpdateUser}
        onSubmitUser={this.handleSubmitUser}
        username={this.state.username}
        header={this.props.route.header} />
    )
  }
})
