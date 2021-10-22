import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function CardDetailsStats(props) {
  console.log("props stats", props)
  const statsComponents = props.pokemon && props.pokemon.stats
    .map(stat => {
      return (
        <div key={stat.stat.name}>
          <Typography variant="body2" color="text.primary" >
            <strong>{stat.stat.name}:</strong> {stat.base_stat}
          </Typography>
        </div>
      )
    })
  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary" >
          Poderes
        </Typography>
        {statsComponents}
      </CardContent>
    </Card>
  );
}

export default CardDetailsStats;
