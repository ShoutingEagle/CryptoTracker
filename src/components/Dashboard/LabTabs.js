import  React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Grid from '../Cards/Grid'
import List from '../Cards/List'
import CustomPagination from '../Pagination';
import styles from './styles.module.css'

export default function LabTabs({coinsList}) {
  const [value,setValue] = useState('list')
  const [page, setPage] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paginationData = coinsList.slice((page-1)*10,(page*10))
  return (
    <div className={styles.labtabs}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="secondary tabs example"
        variant='fullWidth'
      >
        <Tab value="grid" label="Grid" />
        <Tab value="list" label="List" />
        
      </Tabs>

      <div className={styles.pages}>
        {value==='list'?<List coins={paginationData}/>:<Grid coins={paginationData}/>}

        <CustomPagination page={page} setPage={setPage}/>
      </div>

      
      
      
    </div>
  );

}