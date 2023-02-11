interface ClockType {
    value: string;
    label: string;
}

export const clockType: ClockType[] = [
    { value: '12:00', label: '12h clock' },
    { value: '24:00', label: '24h clock' },
];