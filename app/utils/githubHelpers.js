import axios from 'axios'

const CLIENT_ID = '6026f4cce159a12f2584'
const CLIENT_SECRET = 'afb617c37e26e7e761e57842c2b2fab6f668f27a'
const params = `?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`

function getUserInfo (username) {
  return axios.get(`https://api.github.com/users/${username + params}`)
}

function getRepos (username) {
  return axios.get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
}

function getTotalStars (repos) {
  return repos.data.reduce((prev, curr) => prev + curr.stargazers_count, 0)
}

function getPlayerData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(totalStars => {
      return {
        followers: player.followers,
        totalStars
      }
    })
}

function calculateScore (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

export default {
  getPlayersInfo (players) {
    return axios.all(players.map(username => getUserInfo(username)))
      .then(info => {
        return info.map(user => user.data)
      })
      .catch(err => console.warn('Error in getPlayerInfo', err))
  },
  battle (players) {
    const playerOneData = getPlayerData(players[0])
    const playerTwoData = getPlayerData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScore)
      .catch(err => console.warn('Error in battle', err))
  }
}

