import React, { useState, useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [voice, setVoice] = useState(null);
  const [voices, setVoices] = useState([]);

  const synth = window.speechSynthesis;

  useEffect(() => {
    const getVoices = () => {
      setVoices(synth.getVoices());
    };

    getVoices();
    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = getVoices;
    }
  }, [synth]);

  useEffect(() => {
    speak(); // Automatically speak when text changes
  }, [text, pitch, rate, volume, voice]);

  const speak = () => {
    if (synth.speaking) {
      synth.cancel(); // Cancel current speech if already speaking
    }

    if (text !== '') {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.onend = () => {
        console.log('SpeechSynthesisUtterance.onend');
      };
      utterThis.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
      };

      utterThis.pitch = pitch;
      utterThis.rate = rate;
      utterThis.volume = volume;
      if (voice) {
        utterThis.voice = voice;
      }

      synth.speak(utterThis);
    }
  };

  return (
    <div>
      <h2>Text to Speech</h2>
      <textarea
        rows="4"
        cols="50"
        value={text}
        readOnly
      />
      <div>
        <label>
          Pitch:
          <input
            type="range"
            min="0"
            max="2"
            step="0.1"
            value={pitch}
            onChange={(e) => setPitch(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Rate:
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Volume:
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Voice:
          <select onChange={(e) => setVoice(voices.find(v => v.name === e.target.value))}>
            {voices.map((voice, index) => (
              <option key={index} value={voice.name}>
                {voice.name} ({voice.lang})
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
};

export default TextToSpeech;
