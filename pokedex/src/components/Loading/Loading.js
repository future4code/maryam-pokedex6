import React, { useState } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

function Loading(props) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Loading;
