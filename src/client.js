module.exports = {
  client: {
    getPokemon: (success, outgoing) => {
      fetch(`/api/pokemon?limit=${outgoing.limit}&offset=${outgoing.offset}`, {
        headers: { Accept: 'application/json' }
      })
        .then(checkStatus)
        .then(parseJSON)
        .then(success);
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
