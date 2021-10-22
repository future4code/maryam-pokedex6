import React from 'react';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';

function CardDetailsStats() {
  return (
    <Card sx={{ minWidth: 300, boxShadow: 7 }} align="center">
      <CardContent>
        <Typography variant="h5" color="text.primary" >
          Poderes
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardDetailsStats;
