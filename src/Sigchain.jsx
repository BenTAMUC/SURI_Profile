import React from 'react';
import './Sigchain.css';
import { Link } from 'react-router-dom';

const sig = [
    {
        "seqno": 1,
        "type": "genesis",
        "data": {},
        "signature": "00a1b2c3d4",
        "prev": null
    },
    {
        "seqno": 2,
        "type": "verify",
        "data": {},
        "signature": "f1e2d3c4b5",
        "prev": "00a1b2c3d4"
    },
    {
        "seqno": 3,
        "type": "verify",
        "data": {},
        "signature": "a1b2c3d4e5",
        "prev": "f1e2d3c4b5"
    },
    {
        "seqno": 4,
        "type": "revoke",
        "data": {},
        "signature": "1a2b3c4d5e",
        "prev": "a1b2c3d4e5"
    }
]

const Sigchain = () => {
    return (
        <div className="activity-container">
            <Link to = {"/"}>
                <h2>Home</h2>
            </Link>
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
            <button>Full JSON Download</button>
        </div>
    );
}

export default Sigchain;