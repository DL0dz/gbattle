import React, { PropTypes } from 'react'

const styles = {
  container: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  content: {
    fontSize: 55,
    textAlign: 'center',
    marginTop: 50,
    position: 'absolute',
    width: '100%'
  }
}

const Loading = React.createClass({
  getDefaultProps () {
    return {
      text: 'Loading',
      speed: 300
    }
  },
  getInitialState () {
    this.originalText = this.props.text
    return {
      text: this.originalText
    }
  },
  componentDidMount () {
    const stopper = `${this.originalText}...`
    this.interval = setInterval(() => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: `${this.state.text}.`
        })
      }
    }, this.props.speed)
  },
  componentWillUnmount () {
    clearInterval(this.interval)
  },
  render () {
    return (
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
})

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

export default Loading
