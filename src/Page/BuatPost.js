import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export function BuatPost(){
  return(
  <div className = "buatPost">
      <header></header>

      <Grid container spacing = {2} style={{marginTop:20,marginLeft:10}}>
          <Grid xs={6}>
              <p>Dialog Box - Buat Post</p>
          </Grid>
          <Grid xs={6}>
              <Button variant="contained" href="buatPengguna.js">
                  Simpan
              </Button>
          </Grid>
      </Grid>
      <Box>
        <TextField id="title" label="Title" variant="outlined" style={{width:'70%',innerHeight:'100px',marginLeft:10}}/>
      </Box>
      <Box>
          <TextField id="body" label="Body" variant="outlined" rows={100} style={{width:'70%',marginTop:'10px',marginLeft:10}}/>
      </Box>

    </div>
  )
}