export const getOptionsFromFilms = films => {
  return films && films.map(film => ({ value: film.id, text: film.title }));
};

export const getOptionsFromSpecies = species => {
  return species && species.map(item => ({ value: item.id, text: item.name }));
};

export const getFilteredCharacters = (characters, species) => {
  return characters.filter(character => {
    if (species) {
      return character.species.id === species;
    }
    return true;
  });
};
