import React from 'react';
import classes from "./header.module.css"

function Headers() {
    return (
        <div>
            Headers
            <ul>
                <li className={classes.names}>main.page</li>
                <li className={classes.names}>about.page</li>
                <li className={classes.names}>login</li>
            </ul>
        </div>
    );
}

export default Headers;