import React from "react";
import {
  Card,
  CardActionArea,
  Typography,
  CardContent,
  Grid
} from "@material-ui/core";

const ResultCard = ({ character }) => {
  return (
    <Card className="" style={{ border: "1px solid white" }}>
      <CardActionArea>
        {/* This way you can show a image of the character */}
        {/* <CardMedia
          component="img"
          alt="Yoda"
          height="140"
          image={cardImage}
          title="Yoda"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              Gender
            </Grid>
            <Grid item xs={8}>
              {character.gender}
            </Grid>
            <Grid item xs={4}>
              Height
            </Grid>
            <Grid item xs={8}>
              {character.height}cm
            </Grid>
            <Grid item xs={4}>
              Weight
            </Grid>
            <Grid item xs={8}>
              {character.mass}kg
            </Grid>
            <Grid item xs={4}>
              Home World
            </Grid>
            <Grid item xs={8}>
              {character.homeworld && character.homeworld.name}
            </Grid>
            <Grid item xs={4}>
              Species
            </Grid>
            <Grid item xs={8}>
              {character.species && character.species.name}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResultCard;
