import React, { PropTypes } from 'react'

const UserDetails = user =>
  <ul style={{listStyle: 'none'}}>
    {!!user.score && <li><h3>Score: {user.score}</h3></li>}
    <li><img src={user.info.avatar_url} alt='user avatar' /></li>
    {user.info.name && <li>Name : {user.info.name}</li>}
    <li>Username: {user.info.login}</li>
    {user.info.location && <li>Location : {user.info.location}</li>}
    {user.info.company && <li>Company : {user.info.company}</li>}
    <li>Followers: {user.info.followers}</li>
    <li>Following: {user.info.following}</li>
    <li>Public Repos: {user.info.public_repos}</li>
    {user.info.blog && <li>Blog : <a href={user.info.blog}>{user.info.blog}</a></li>}
  </ul>

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    login: PropTypes.string.isRequired,
    location: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    blog: PropTypes.string
  })
}

export default UserDetails
