import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function CardStats() {
  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary" >
          Poderes
        </Typography>
        <Typography variant="body2">
          <p>hp: 45</p>
          <p>attack: 49</p>
          <p>defense: 49</p>
          <p>special-attack: 65</p>
          <p>special-defense: 65</p>
          <p>speed: 45</p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardStats;
