import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextToSpeech from './TextToSpeech'; // Import the TextToSpeech component

const DetectedObjects = () => {
    const [detectedObjects, setDetectedObjects] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            fetchDetectedObjects();
        }, 1000); // Fetch detected objects every second

        return () => clearInterval(interval);
    }, []);

    const fetchDetectedObjects = async () => {
        try {
            const response = await axios.get('http://localhost:5000/detected_objects'); // Replace with your Flask server URL
            setDetectedObjects(response.data);
        } catch (error) {
            console.error('Error fetching detected objects:', error);
        }
    };

    return (
        <div>
            <h1>Detected Objects:</h1>
            <ul>
                {detectedObjects.map((object, index) => (
                    <li key={index}>{object}</li>
                ))}
            </ul>
            <TextToSpeech text={detectedObjects.join(', ')} /> {/* Pass detected objects as text to TextToSpeech */}
        </div>
    );
};

export default DetectedObjects;
