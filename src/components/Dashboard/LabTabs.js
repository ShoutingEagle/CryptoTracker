import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '../Cards/Grid';
import List from '../Cards/List';
import CustomPagination from '../Pagination';
import styles from './styles.module.css';

export default function LabTabs({ coinsList }) {
    const [value, setValue] = useState('list');
    const [page, setPage] = useState(1);
    const [isGridOnly, setIsGridOnly] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paginationData = coinsList.slice((page - 1) * 10, page * 10);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 950) {
                setIsGridOnly(true);
            } else {
                setIsGridOnly(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles.labtabs}>
            {!isGridOnly && (
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                    variant="fullWidth"
                >
                    <Tab value="grid" label="Grid" />
                    <Tab value="list" label="List" />
                </Tabs>
            )}

            <div className={styles.pages}>
                {isGridOnly || value === 'grid' ? (
                    <Grid coins={paginationData} />
                ) : (
                    <List coins={paginationData} />
                )}

              <CustomPagination page={page} setPage={setPage} />
            </div>
        </div>
    );
}

