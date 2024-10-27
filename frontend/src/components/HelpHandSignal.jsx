import React, { useState, useEffect } from 'react';

const HelpHandSignal = () => {
    const [status, setStatus] = useState('Waiting for hand signal...');
    const [videoStream, setVideoStream] = useState(null);
    const [videoRef, setVideoRef] = useState(null);

    // Request video permissions and initialize video stream
    useEffect(() => {
        const initializeVideoStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setVideoStream(stream);
                if (videoRef) {
                    videoRef.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
                setStatus('Camera access denied. Please allow camera access.');
            }
        };

        initializeVideoStream();

        return () => {
            if (videoStream) {
                videoStream.getTracks().forEach(track => track.stop());
            }
        };
    }, [videoRef]);

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
            <video
                ref={videoElement => setVideoRef(videoElement)}
                autoPlay
                style={{ width: '100%', height: 'auto', border: '1px solid black' }}
            />
            <button onClick={startHandSignalDetection}>Start Hand Signal Detection</button>
        </div>
    );
};

export default HelpHandSignal;
