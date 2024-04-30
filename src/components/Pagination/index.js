import  React, {useState} from 'react';
import Pagination from '@mui/material/Pagination';


export default function CustomPagination({page,setPage}) {
  
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Pagination count={10} page={page} onChange={handleChange}/>
    </div>
  );
}