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

module.exports = { getPaginatedItems, findOne, filtered };
