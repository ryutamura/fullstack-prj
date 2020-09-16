// Update with your config settings.


module.exports = {

  development: {
    client: "pg",
    connection: 
      process.env.DATABASE_URL ||
      'postgres://rtamura@localhost:5432/rappers',
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: 
      process.env.DATABASE_URL ||
      'postgres://rtamura@localhost:5432/rappers',
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  },

  production: {
    client: "pg",
    connection: 
      process.env.DATABASE_URL ||
      'postgres://rtamura@localhost:5432/rappers',
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  }

};
