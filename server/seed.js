const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const DATA_FILE = path.join(__dirname, './data.json');
const DESTINATION = path.join(__dirname, './seed_test.json');
const pokemon = JSON.parse(fs.readFileSync(DATA_FILE));

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(`HTTP Error ${res.statusText}`);
    error.status = res.statusText;
    error.response = res;
    console.error(error);
    throw error;
  }
};

const parseJSON = res => {
  return res.json();
};

const handleData = newData => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    const json = JSON.parse(data);
    let index = json.findIndex(item => {
      return item.id === newData.id;
    });
    json[index] = newData;
    fs.writeFile(DATA_FILE, JSON.stringify(json));
  });
};

pokemon.forEach(p => {
  fetch(`http://pokeapi.co/api/v2/pokemon/${p.name.toLowerCase()}`, {
    headers: { Accept: 'application/json' }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      const newData = {
        id: p.id,
        name: p.name,
        types: p.types,
        imageUrl: p.imageUrl,
        height: data.height,
        weight: data.weight,
        sprites: data.sprites
      };
      handleData(newData);
    })
    .catch(err => console.log('error fetching pokemon-->: ', err));
});
