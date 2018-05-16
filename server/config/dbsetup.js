const db = require('./../database');

const createPokemonTable = async () => {
  const query = `
  CREATE TABLE IF NOT EXISTS pokemon
  (
    id          SERIAL,
    name        VARCHAR(255) UNIQUE NOT NULL,
    types       VARCHAR(255) ARRAY,
    imageUrl    VARCHAR(255),
    CONSTRAINT  pokemon_pk PRIMARY KEY(id)         
  )
    `;

  try {
    await db.query(query);
    console.log('pokemon table has been created!');
  } catch (err) {
    console.error(err);
  }
};

createPokemonTable();
