import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export const Navbar =()=>{
  return(
    <section>
      <AppBar position="static" color="default">
       <Toolbar>
         <Typography variant="h6" color="inherit">
           Photos
         </Typography>
       </Toolbar>
     </AppBar>
    </section>
  )
}
