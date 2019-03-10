const filterShinySprites = url => {
  const regex = /\/shiny\//;
  return url && !regex.test(url);
};

export { filterShinySprites };
