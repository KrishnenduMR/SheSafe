import React, { useState, useEffect } from 'react';

const HelpVoiceCommand = () => {
    const [status, setStatus] = useState('Waiting for voice command...');
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [recordedChunks, setRecordedChunks] = useState([]);

    // Request microphone permission and initialize MediaRecorder
    useEffect(() => {
        const initializeMediaRecorder = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const recorder = new MediaRecorder(stream);
                
                recorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        setRecordedChunks((prev) => [...prev, event.data]);
                    }
                };
                
                recorder.onstop = handleStopRecording;
                setMediaRecorder(recorder);
            } catch (error) {
                console.error('Error accessing microphone:', error);
                setStatus('Microphone access denied. Please allow microphone access.');
            }
        };

        initializeMediaRecorder();
    }, []);

    const startRecording = () => {
        if (mediaRecorder) {
            setRecordedChunks([]);
            mediaRecorder.start();
            setStatus('Recording... Please speak now.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            setStatus('Recording stopped. Processing audio...');
        }
    };

    const handleStopRecording = async () => {
        const audioBlob = new Blob(recordedChunks, { type: 'audio/webm' });
        const file = new File([audioBlob], 'recording.webm', { type: 'audio/webm' });

        // Process the recorded audio file
        await startVoiceCommandDetection(file);
    };

    const startVoiceCommandDetection = async (file) => {
        if (!file) {
            setStatus('No audio recorded.');
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
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
        </div>
    );
};

export default HelpVoiceCommand;
