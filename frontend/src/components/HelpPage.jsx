import React from 'react';
import HelpHandSignal from './HelpHandSignal';
import HelpVoiceCommand from './HelpVoiceCommand';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const HelpPage = () => (
    <div className="container mt-5">
        <h1 className="text-center mb-4">Help Page</h1>
        <div className="row">
            <div className="col-md-6 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Hand Signals</h5>
                    </div>
                    <div className="card-body">
                        <HelpHandSignal />
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="mb-0">Voice Commands</h5>
                    </div>
                    <div className="card-body">
                        <HelpVoiceCommand />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HelpPage;
