import React from "react";
import { Grid, Paper, Box } from "@material-ui/core";
import Select from "../components/Select";
import Card from "../components/Card";

const CharacterList = () => {
  const handleMovieChange = () => {
    console.log("handleMovieChange");
  };
  const handleSpeciesChange = () => {
    console.log("handleSpeciesChange");
  };
  const handlePlanetsChange = () => {
    console.log("handlePlanetsChange");
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
        <Paper variant="outlined" square>
          <Box p={1}>
            <Select label="Movies" value={20} onChange={handleMovieChange} />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
        <Paper variant="outlined" square>
          <Box p={1}>
            <Select label="Species" value={30} onChange={handleSpeciesChange} />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
        <Paper variant="outlined" square>
          <Box p={1}>
            <Select label="Planets" onChange={handlePlanetsChange} />
          </Box>
        </Paper>
      </Grid>
      {/* display the list below */}
      <Grid item xs={12} sm={4}>
        <Box p={3}>
          <Card />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CharacterList;
