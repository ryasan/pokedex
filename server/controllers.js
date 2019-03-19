const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, './data.json');
const PER_PAGE = 12;
const { getPaginatedItems, findOne, filtered } = require('./utils');

module.exports = {
  getPokemon(req, res) {
    const categories = req.query.categories.split(',');
    const searchTerm = req.query.searchTerm;
    const offset = req.query.offset ? parseInt(req.query.offset, 10) : 0;

    // map relevant properties from pokemon json file
    let pokemon = JSON.parse(fs.readFileSync(DATA_FILE)).map(p => ({
      id: p.id,
      name: p.name,
      types: p.types,
      imageUrl: p.imageUrl
    }));

    // filter pokemon by category and search term
    pokemon = filtered(pokemon, categories, searchTerm);

    // info for pagination
    const meta = {
      limit: PER_PAGE,
      totalCount: pokemon.length
    };

    res.setHeader('Cache-Control', 'no-cache');
    res.json({ pokemon: getPaginatedItems(pokemon, offset), meta });
  },
  getOnePokemon(req, res) {
    const json = findOne(
      JSON.parse(fs.readFileSync(DATA_FILE)),
      req.query.title
    );

    res.setHeader('Cache-Control', 'no-cache');
    res.json(json);
  }
};
