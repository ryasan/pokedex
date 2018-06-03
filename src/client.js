module.exports = {
  client: {
    getAllPokemon(success, query) {
      fetch(
        `/api/pokemon?limit=${query.limit}&offset=${query.offset}&categories=${query.categories}`,
        { headers: { Accept: 'application/json' } }
      ).then(checkStatus)
       .then(parseJSON)
       .then(success);
    },
    getOnePokemon(success, query) {
      fetch(`/api/details?title=${query.title}`, 
      { headers: {Accept: 'application/json'} }
     ).then(checkStatus)
      .then(parseJSON)
      .then(success)
    }
  }
};

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
