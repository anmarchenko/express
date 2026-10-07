'use strict'

const NYC = require('nyc')

const nyc = new NYC({
  cwd: process.cwd(),
  tempDirectory: './.nyc_output',
  exclude: ['examples/**', 'test/**', 'benchmarks/**'],
  cache: false,
  hookRequire: true,
  instrument: true
})

nyc.wrap()
