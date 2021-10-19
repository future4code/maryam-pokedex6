import React from 'react';
import { Card } from '@material-ui/core';
import { CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function CardsHome(props) {
  return (
    <Card sx={{ maxWidth: (props.cardWidth), boxShadow: 7 }} align="center">
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.primary" >
          {props.pokeName}
        </Typography>
        <img src={props.pokeImage} />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={props.onClick}
          color={props.colorBtn1}
          variant={props.variantBtn1}
        >
          {props.textBtn1}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={props.onClick}
          color={props.colorBtn2}
          variant={props.variantBtn2}
        >
          {props.textBtn2}
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardsHome;