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
      'postgres://qyceryminagxde:7462144f3bba8d063b21beb637828240c9a1d33b030d6badf21ff1cf2a1b06b5@ec2-107-20-15-85.compute-1.amazonaws.com:5432/d8c0i56jk48u49',
    migrations: {
      directory: __dirname + '/server/db/migrations',
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
