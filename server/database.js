const pg = require('pg');

const config = {
  user: 'root',
  password: '123',
  host: 'localhost',
  database: 'pokemon_db',
  port: 5432,
  max: 20
};

const db = new pg.Pool(config);

db.on('connect', () => console.log('successfully connected to database'));
db.on('error', err => console.error('database encountered an error: ', err));

db.connect();

module.exports = db;
