const postFetch = (url, options, body) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
    ...options
  };
  return fetch(url, fetchOptions);
};

export const getAllMovies = () => {
  const body = {
    query: "{allFilms{films{title,episodeID,id}}}"
  };
  return postFetch("/swapi", {}, body);
};

export const getSpeciesByMovieId = movieId => {
  const body = {
    query: `{film(id:"${movieId}"){speciesConnection{species{name,id}}}}`
  };
  return postFetch("swapi", {}, body);
};

export const getCharactersByMovieId = movieId => {
  const body = {
    query: `{ film(id: "${movieId}") { characterConnection { characters { name gender height mass homeworld { name } species { name id } } } } }`
  };
  return postFetch("swapi", {}, body);
};
