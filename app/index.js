import React from 'react'
import { render } from 'react-dom'
import routes from './config/routes'
import Raven from 'raven-js'

const sentryKey = '2179b601ecb744ba82c63ec702ddbce7'
const sentryApp = '104805'
const sentryURL = `https://${sentryKey}@sentry.io/${sentryApp}`
const _APP_INFO = {
  name: 'Github Battle',
  branch: '4',
  version: '1.0'
}
Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch
  }
}).install()

render(routes, document.getElementById('app'))
