'use strict'

const path = require('path')
const AutoLoad = require('@fastify/autoload')

require('dotenv').config()

module.exports = async function application (app, opts) {
  
  app.register(require('fastify-mongodb'), {
   url: 'mongodb://localhost:27017/todo-list'
  })

}

module.exports.options = {}

module.exports = async function (fastify, opts) {

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })


  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
