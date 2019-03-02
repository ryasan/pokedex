import React from 'react';

import GithubSVG from './Github';
import PokeballSVG from './Pokeball';
import Loader from './Loader';

export default props => {
  switch (props.name) {
    case 'github':
      return <GithubSVG {...props} />;
    case 'pokeball':
      return <PokeballSVG {...props} />;
    case 'loader':
      return <Loader {...props} />;
    default:
      return;
  }
};
