import React, { useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function CardDetailsMoves(props) {

  const numberOfMovesToDisplay = 7;
  const movesList = [];
  if (props.pokemon && props.pokemon.moves) {
    for (let i = 0; i < numberOfMovesToDisplay; i++) {
      movesList.push(props.pokemon.moves[i].move.name);
    }
  }

  const movesComponents = movesList && movesList
    .map(move => {
      return (
        <div key={move}>
          <Typography variant="body2" color="text.primary" >
            {move}
          </Typography>
        </div>
      )
    })
  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary" >
          Principais ataques
        </Typography>
        {movesComponents && movesComponents}
      </CardContent>
    </Card>
  );
}

export default CardDetailsMoves;
