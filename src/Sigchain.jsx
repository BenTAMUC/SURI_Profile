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
        <div className="main-container">
            <div className="main-part2-container">
                <div className="sig-list-left">
                        <Link to = {"/"}>
                            <h2>Home</h2>
                        </Link>

                        <h3>Sigchain Links</h3>

                        <ul>
                            <li>soclial proof</li>
                            <li>soclial proof</li>
                            <li>soclial proof</li>
                            <li>soclial proof</li>
                        </ul>
                    </div>

                    <div className="chainlink-right">
                        <h4>Chainlink #</h4>

                        <div className="payload">
                            <p>Payload:</p>
                            {/*stuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuf*/}
                        </div>

                        <div className="signature">
                            <p>Signature</p>
                            {/*stuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuf*/}
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Sigchain;