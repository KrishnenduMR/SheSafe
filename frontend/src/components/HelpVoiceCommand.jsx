import React, { useState } from 'react';

const HelpVoiceCommand = () => {
    const [status, setStatus] = useState('Waiting for voice command...');
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const startVoiceCommandDetection = async () => {
        if (!file) {
            setStatus('Please select an audio file.');
            return;
        }

        setStatus('Detecting voice command...');
        const formData = new FormData();
        formData.append('audiofile', file);

        try {
            const response = await fetch('/api/predict-violence/', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setStatus(data.result);
        } catch (error) {
            console.error('Error detecting voice command:', error);
            setStatus('Error detecting voice command');
        }
    };

    return (
        <div>
            <h2>Help Voice Command Detection</h2>
            <p>{status}</p>
            <input type="file" accept="audio/*" onChange={handleFileChange} />
            <button onClick={startVoiceCommandDetection}>Start Voice Command Detection</button>
        </div>
    );
};

export default HelpVoiceCommand;
