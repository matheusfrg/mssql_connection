module.exports = {

  development: {
    client: 'mssql',
    connection: {
      host: '10.0.0.5',
      user: 'pexAdmin',
      password: '@DbAmarelo2160#',
      database: 'PEX',
      port: +1433
    },
    pool: {
      max: 1,
      min: 0
    }
  },
};
