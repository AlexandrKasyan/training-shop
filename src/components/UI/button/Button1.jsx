import React from 'react';
import classes from './Button1.module.css';

const Button1 = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.button1}>
            {children}
        </button>
    );
};

export default Button1;