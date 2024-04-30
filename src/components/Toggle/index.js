import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Toggle({state,setState}) {
  


  const handleChange = (event, newAlignment) => {
    setState(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={state}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="prices" >
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" >
        Mkt Cap.
      </ToggleButton>
      <ToggleButton value="total_volumes" >
        Volume
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
