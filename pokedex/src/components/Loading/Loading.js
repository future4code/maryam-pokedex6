import React, { useState } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

function Loading(props) {
  const [open, setOpen] = useState(props.isLoading);

  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Loading;
