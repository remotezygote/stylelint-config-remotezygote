import merge from 'deepmerge'

import Basic from './rules/basic'
import Production from './rules/production'

const baseConfig = {}

let config = [
  Basic
].reduce((prev, cur) => {
  return merge(prev, cur)
}, baseConfig)

if (process.env.NODE_ENV === 'production') {
  config = merge(config, Production)
}

module.exports = config
