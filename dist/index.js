const fastify = require('fastify')({ logger: true })

fastify.get('/', async (request, reply) => {
  return { name: 'john doe' }
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()