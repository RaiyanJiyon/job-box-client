import { useState, useEffect } from 'react';

// Utility function to format the date
function formatDate(dateTime) {
    const date = new Date(dateTime);
    const now = new Date();

    const timeDifference = now - date;
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (timeDifference < 0) return "Just now";
    if (timeDifference < hour) return `${Math.floor(timeDifference / minute)} min ago`;
    if (timeDifference < day) return `${Math.floor(timeDifference / hour)} hrs ago`;

    return `${Math.floor(timeDifference / day)} days ago`;
}

// Custom hook to use the formatted date
const useFormattedDate = (dateTime) => {
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        const updateFormattedDate = () => {
            setFormattedDate(formatDate(dateTime));
        };

        updateFormattedDate();

        // Update the formatted date every minute
        const intervalId = setInterval(updateFormattedDate, 60 * 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, [dateTime]);

    return formattedDate;
};

export default useFormattedDate;
