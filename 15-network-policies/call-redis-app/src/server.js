const redis = require('redis')
const os = require("os");

const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.connect()
  .then(() => {
    redisClient.set('maDonneeSuperImportante', 'ca fonctionne !')
    redisClient.get('maDonneeSuperImportante')
      .then(value => console.log(value))
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err))


setInterval(() => {}, 1 << 30)