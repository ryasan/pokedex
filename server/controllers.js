const fs = require('fs');
const path = require('path');
const DATA_FILE = path.join(__dirname, './data.json');
const PER_PAGE = 12;

const getPaginatedItems = (items, offset) => {
  return items.slice(offset, offset + PER_PAGE);
};

const findOne = (pokemon, name) => {
  return pokemon.find(p => p.name === name);
};

const filtered = (pokemon, categories, searchTerm) => {
  return pokemon.filter(p => {
    return categories.some(category => {
      const searchRegex = new RegExp(searchTerm, 'gi');
      return (
        (p.types.includes(category) || !category) && searchRegex.test(p.name)
      );
    });
  });
};

module.exports = {
  getPokemon(req, res) {
    const categories = req.query.categories.split(',');
    const searchTerm = req.query.searchTerm;
    const offset     = req.query.offset ? parseInt(req.query.offset, 10) : 0;

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
