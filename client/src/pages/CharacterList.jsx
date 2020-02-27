import React, { useEffect, useState } from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import Select from "../components/Select";
import CharacterCard from "../components/CharacterCard";
import {
  getSpeciesByMovieId,
  getAllMovies,
  getCharactersByMovieId
} from "../service";
import {
  getOptionsFromFilms,
  getOptionsFromSpecies,
  getFilteredCharacters
} from "../util";

const CharacterList = () => {
  const [films, setFilms] = useState(null);
  const [species, setSpecies] = useState(null);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    getAllMovies()
      .then(response => {
        return response.json();
      })
      .then(data => {
        setFilms(data.data.allFilms.films);
      });
  }, []);
  const handleMovieChange = event => {
    const filmId = event.target.value;
    getSpeciesByMovieId(filmId)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setSpecies(data.data.film.speciesConnection.species);
      });
    getCharactersByMovieId(filmId)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCharacters(data.data.film.characterConnection.characters);
      });
  };
  const handleSpeciesChange = event => {
    setSelectedSpecies(event.target.value);
  };
  const handlePlanetsChange = () => {
    console.log("handlePlanetsChange");
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
        <Paper variant="outlined" square>
          <Box p={1}>
            <Select
              label="Movies"
              options={getOptionsFromFilms(films)}
              onChange={handleMovieChange}
            />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
        <Paper variant="outlined" square>
          <Box p={1}>
            <Select
              label="Species"
              options={getOptionsFromSpecies(species)}
              onChange={handleSpeciesChange}
              noOptionMessage="Please select a movie first"
            />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
        <Paper variant="outlined" square>
          <Box p={1}>
            <Select
              disabled
              label="Planets"
              onChange={handlePlanetsChange}
              noOptionMessage="Please select a species first"
            />
          </Box>
        </Paper>
      </Grid>
      {/* display the list below */}
      {getFilteredCharacters(characters, selectedSpecies).map(character => (
        <Grid key={character.name} item xs={12} sm={4}>
          <Box p={3}>
            <CharacterCard character={character} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterList;
