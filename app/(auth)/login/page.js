"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styles from './../../page.module.css'

export default function About() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };
    return (
        <div className={styles.main}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs example">
                <Tab label="Login" />
                <Tab label="Registration" />
            </Tabs>
            {value === 0 && <div>Hi, this is Login</div>}
            {value === 1 && <div>This is Registration</div>}
        </div>
    )
}