import React from 'react';

import GithubSVG from './Github';
import PokeballSVG from './Pokeball';

export default props => {
  switch (props.name) {
    case 'github':
      return <GithubSVG {...props} />;
    case 'pokeball':
      return <PokeballSVG {...props} />;
    default:
      return;
  }
};
