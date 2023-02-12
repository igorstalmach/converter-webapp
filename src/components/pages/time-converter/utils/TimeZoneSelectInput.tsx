import React from "react";
import {abbreviations, GMT, UTC} from "../assets/timeZoneValues";
import SelectOption from "./SelectOption";

interface IProps {
    className?: string;
}

export default function TimeZoneSelectInput(props: IProps) {
    return (
        <select className={props.className}>
          <optgroup label="Abbreviations">
              {abbreviations.map(item => {
                    return <SelectOption value={item.value} label={item.label}/>
              })}
          </optgroup>
          <optgroup label="Coordinated Universal Time">
              {UTC.map(item => {
                    return <SelectOption value={item.value} label={item.label}/>
              })}
          </optgroup>
          <optgroup label="Greenwich Mean Time">
              {GMT.map(item => {
                    return <SelectOption value={item.value} label={item.label}/>
              })}
          </optgroup>
        </select>
    );
}