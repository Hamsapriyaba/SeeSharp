// src/App.js
import React from 'react';
import WebcamFeed from './components/WebcamFeed';
import DetectedObjects from './components/DetectedObjects';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Object Detection for Visually Impaired</h1>
                <WebcamFeed />
                <DetectedObjects />
            </header>
        </div>
    );
}

export default App;
