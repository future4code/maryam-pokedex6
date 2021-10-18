import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function CardMoves() {
  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary" >
          Principais ataques
        </Typography>
        <Typography variant="body2">
          <p>razor-wind</p>
          <p>swords-dance</p>
          <p>cut</p>
          <p>bind</p>
          <p>vine-whip</p>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardMoves;
