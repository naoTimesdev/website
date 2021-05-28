import React from "react";

export function LinkButton(props) {
    return (
        <a
            {...props}
            className={`button button--outline button--primary`}
            style={{ textTransform: "uppercase" }}
        >
            {props.children}
        </a>
    );
};