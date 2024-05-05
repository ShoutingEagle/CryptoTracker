import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels({stateReceived,state,stateToFilter,setState}) {



  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={state}
          onChange={handleChange}
        >
          {stateReceived.filter((item) => item.id!==stateToFilter).map((item) => <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
          
          
        </Select>
       
      </FormControl>
    </div>
  );
}
