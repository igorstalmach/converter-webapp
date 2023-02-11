import React from "react";

interface IProps {
    value: string,
    label: string
}

export default function Option(props: IProps) {
    return(
        <option value={props.value}>{props.label}</option>
    );
}