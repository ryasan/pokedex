const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, './data.json');
const PER_PAGE = 12;

const getPaginatedItems = (items, offset) => {
  return items.slice(offset, offset + PER_PAGE);
};

module.exports = {
  getPokemon: (req, res) => {

    const pokemon        = JSON.parse(fs.readFileSync(DATA_FILE));
    const offset         = req.query.offset ? parseInt(req.query.offset, 10) : 0;
    const nextOffSet     = offset + PER_PAGE;
    const previousOffSet = offset - PER_PAGE < 1 ? 0 : offset - PER_PAGE;

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
  }
};

