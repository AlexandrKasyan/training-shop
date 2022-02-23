import React from 'react';
import classes from './Input1.module.css'

const Input1 = (props) => {
    return (
        <input className={classes.input1} {...props}/>

    );
};

export default Input1;