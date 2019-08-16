module.exports = {
  development: {
    client: 'postgres',
    connection: {
      host: 'localhost',
      database: 'webdbsprint',
      user:     "postgres",
      password: "Chaoticneu21"
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
  }, 
};