const fastify = require('fastify')({ logger: true })

fastify
.get('/', async (request, reply) => {
  return { name: 'john doe' }
})
.get('/users', async (request, reply) => {
    return { id: 2 }
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