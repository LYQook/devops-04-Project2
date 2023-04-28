'use strict'

const fp = require('fastify-plugin')

const {
    MONGO_INITDB_ROOT_USERNAME,
    MONGO_INITDB_ROOT_PASSWORD,
   // MONGO_INITDB_ROOT_HOSTNAME
 } = process.env
 
module.exports = fp(async function (fastify, opts) {
    fastify.register(require('@fastify/mongodb'), {
        url: 
        `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/?authMechanism=DEFAULT`
      })
})