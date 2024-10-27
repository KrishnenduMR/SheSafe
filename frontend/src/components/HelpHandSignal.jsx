import React, { useState } from 'react';

const HelpHandSignal = () => {
    const [status, setStatus] = useState('Waiting for hand signal...');

    const startHandSignalDetection = async () => {
        setStatus('Detecting...');
        try {
            const response = await fetch('/api/predict-help-hand-signal/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (data.result === 'help needed') {
                setStatus('Help Needed Detected');
            } else {
                setStatus('No Help Needed');
            }
        } catch (error) {
            console.error('Error detecting hand signal:', error);
            setStatus('Error detecting hand signal');
        }
    };

    return (
        <div>
            <h2>Help Hand Signal Detection</h2>
            <p>{status}</p>
            <button onClick={startHandSignalDetection}>Start Hand Signal Detection</button>
        </div>
    );
};

export default HelpHandSignal;
