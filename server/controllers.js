const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, './data.json');
const PER_PAGE = 12;

const getPaginatedItems = (items, offset) => {
  return items.slice(offset, offset + PER_PAGE);
};

module.exports = {
  getPokemon(req, res) {

    const categories     = req.query.categories.split(',');
    const offset         = req.query.offset ? parseInt(req.query.offset, 10) : 0;
    const nextOffSet     = offset + PER_PAGE;
    const previousOffSet = offset - PER_PAGE < 1 ? 0 : offset - PER_PAGE;
    let   pokemon        = JSON.parse(fs.readFileSync(DATA_FILE));

    pokemon = pokemon.map(p => {
      return { id: p.id, name: p.name, types: p.types, imageUrl: p.imageUrl };
    });

    categories[0] ? pokemon = filtered(pokemon, categories) : undefined;

    const meta = {
      limit      : PER_PAGE,
      next       : `?limit=${PER_PAGE}&offset=${nextOffSet}`,
      offset     : req.query.offset,
      previous   : `?limit=${PER_PAGE}&offset=${previousOffSet}`,
      total_count: pokemon.length
    };
    const json = {
      pokemon: getPaginatedItems(pokemon, offset),
      meta: meta
    };

    res.setHeader('Cache-Control', 'no-cache');
    res.json(json);
  },
  getOnePokemon(req, res) {
    const json = findOne(JSON.parse(fs.readFileSync(DATA_FILE)), req.query.title)

    res.setHeader('Cache-Control', 'no-cache');
    res.json(json);
  }

};

const filtered = (pokemon, categories) => {
  return pokemon.filter(p => {
    return categories.some(category => {
      return p.types.indexOf(category) !== -1;
    });
  });
};

const findOne = (pokemon, name) => {
  return pokemon.find(p => p.name === name);
}