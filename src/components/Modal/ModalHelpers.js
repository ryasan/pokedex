import React from 'react';

const filterShinySprites = url => {
  let regex = /\/shiny\//;
  return url && !regex.test(url);
};

const filterSprites = (sprites, name) => {
  return Object.values(sprites)
    .filter(filterShinySprites)
    .map((sprite, i) => (
      <img
        className={`sprite sprite-${i + 1}`}
        key={i}
        src={sprite}
        alt={`${name}-${i + 1}`}
      />
    ));
};

const roundNumber = num => {
  return (num * 100) / 1000;
};

export default { filterSprites, roundNumber };
