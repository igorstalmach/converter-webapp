import React from "react";

interface IProps {
    className?: string;
}

export default function TemperatureSelectInput(props: IProps) {
    return (
        <select className={props.className}>
          <optgroup label="Scales">
              <option value="Celsius">Celsius</option>
              <option value="Fahrenheit">Fahrenheit</option>
              <option value="Kelvin">Kelvin</option>
          </optgroup>
        </select>
    );
}