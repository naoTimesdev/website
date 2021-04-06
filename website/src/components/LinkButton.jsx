import React from "react";
import styles from "./LinkButton.styles.css";

export function LinkButton(props) {
    return (
        <a
            {...props}
            className={`button button--outline button--primary ${styles.uppercase}`}
        >
            {props.children}
        </a>
    );
};