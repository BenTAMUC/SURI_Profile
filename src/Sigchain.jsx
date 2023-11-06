import React from 'react';
import './Sigchain.css';

const Sigchain = () => {
    return (
        <div className="activity-container">
            <h2>Home</h2>
            <h3>Activity</h3>
            <ul>
                <li className="highlighted">Claimed ownership of Github account</li>
                <li>Claimed ownership of Twitter account</li>
                <li>Claimed ownership of Facebook account</li>
                <li>Claimed ownership of Reddit account</li>
                <li>Claimed ownership of Keybase account</li>
                <li>Added a new key</li>
                <li>Revoked chainlink 2</li>
            </ul>
            <h4>Chainlink 1</h4>
            <div className="payload">
                <p>Payload:</p>
                {/* ... Your payload details ... */}
            </div>
            <div className="signed-payload">
                <p>Signed payload:</p>
                {/* ... Your signed payload details ... */}
            </div>
            <button>Download</button>
        </div>
    );
}

export default Sigchain;