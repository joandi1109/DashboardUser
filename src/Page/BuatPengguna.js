import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
export function BuatPengguna(){
  return (
    <div className = "buatPengguna">
        <Box style={{marginTop:50}}>
        <TextField id="title" label="Name" variant="outlined" style={{width:'90%',innerHeight:'100px'}}/>
        </Box>
      <Box>
          <TextField id="body" label="Email" variant="outlined" rows={100} style={{width:'90%',marginTop:'10px'}}/>
      </Box>  
      <FormControl style={{width:'90%',marginTop:20}}>
        <FormLabel id="demo-row-radio-buttons-group-label" style={{textAlign:'left'}} >Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          
        </RadioGroup>
        <FormLabel id="demo-row-radio-buttons-group-label" style={{textAlign:'left'}}>Status</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="single" control={<Radio />} label="Single" />
          <FormControlLabel value="married" control={<Radio />} label="Married" />
        </RadioGroup>
      </FormControl>
      <Box style={{justifyContent:'left'}}>
      <Button variant="contained" href="buatPengguna.js" >
          Add
      </Button>
      </Box>
    </div>
  )
}