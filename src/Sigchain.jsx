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
        <div className="main-sig-container">
            <div className="main-part2-container">
                <div className="sig-list-left">
                        <Link to = {"/"} className="home-link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-size">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                            <h4>Home</h4>
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
                        <h2>Chainlink #</h2>

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