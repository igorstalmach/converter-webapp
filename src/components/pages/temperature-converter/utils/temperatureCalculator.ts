export default function temperatureCalculator(scaleTo: string, scaleFrom: string, value: number) {
    switch (scaleFrom) {
        case "Celsius":
            if (scaleTo === "Fahrenheit") {
                return value * 9/5 + 32;
            }
            if (scaleTo === "Kelvin") {
                return value + 273.15;
            } else {
                return value;
            }
        case "Fahrenheit":
            if (scaleTo === "Celsius") {
                return (value - 32) * 5/9;
            }
            if (scaleTo === "Kelvin") {
                return (value - 32) * 5/9 + 273.15;
            } else {
                return value;
            }
        case "Kelvin":
            if (scaleTo === "Celsius") {
                return value - 273.15;
            }
            if (scaleTo === "Fahrenheit") {
                return (value - 273.15) * 9/5 + 32;
            } else {
                return value;
            }
        default:
            return value;
    }
}