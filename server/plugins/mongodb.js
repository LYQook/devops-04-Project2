'use strict'

const fp = require('fastify-plugin')
require('dotenv').config()
const { MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD } = process.env
//const { MONGO_INITDB_ROOT_USERNAME, MONGO_INITDB_ROOT_PASSWORD, MONGO_INITDB_ROOT_HOSTNAME } = process.env

module.exports = fp(async function (fastify, opts) {

  const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/?authMechanism=DEFAULT`
//  const url = `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_INITDB_ROOT_HOSTNAME}:27017/?authMechanism=DEFAULT`
  console.log(url)

  fastify.register(require('@fastify/mongodb'), {
    forceClose: true,
    url: url
  })
})


// 'use strict'

// const fp = require('fastify-plugin')

// const {
//     MONGO_INITDB_ROOT_USERNAME,
//     MONGO_INITDB_ROOT_PASSWORD,
//    // MONGO_INITDB_ROOT_HOSTNAME
//  } = process.env
 
// module.exports = fp(async function (fastify, opts) {
//     fastify.register(require('@fastify/mongodb'), {
//         url: 
//         `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/?authMechanism=DEFAULT`
//       })
// })