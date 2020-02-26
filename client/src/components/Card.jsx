import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent
} from "@material-ui/core";
import cardImage from "../images/background.jpg";

const ResultCard = () => {
  return (
    <Card className="" style={{ border: "1px solid white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Yoda"
          height="140"
          image={cardImage}
          title="Yoda"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Yoda
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Do or, Do not. There is no try. - Yoda
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResultCard;
