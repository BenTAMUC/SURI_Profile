import './Home.css'
import { Link } from 'react-router-dom';
import IdentityCard from './components/IdentityCard';
import { useEffect, useState } from 'react';

const did = {
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://w3id.org/security/suites/jws-2020/v1"
],
"id": "did:web:example.com",
"verificationMethod": [
    {
    "id": "did:web:example.com:#key1",
    "type": "Ed25519VerificationKey2020",
    "controller": "did:web:example.com#key1",
    "Ed25519VerificationKey2020" : "127928319239123812"
    }
],
"assertionMethod": [
    "did:web:example.com:#key1"
],
"subject": {
    "name": "Jordan Schneider",
    "bio": "I like trains",
    "displayImg": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
}
}

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

function Home() {
    // useStates
    const [identitiesList, setidentitiesList] = useState([])

    // hooks
    useEffect(()=> {
        for(let i = 0; i < sig.length; i++){
            if(sig[i].type === "verify"){
                let list = identitiesList
                list.push(<li><IdentityCard credential = {sig[i]}/></li>)
                setidentitiesList(list)
            }
        }
        },[])

    // output
    return(
        <div className="main-container">
            {/* Page Content Wrapper */}
            <div className="content-wrapper">

                {/* Left Panel */}
                <div className="left-panel">
                    <img className="display-image" src={did.subject.displayImg} alt="Profile Image"></img>
                    <h2 className="name">{did.subject.name}</h2>
                    <p className="bio">{did.subject.bio}</p>
                </div>

                {/* Right Panel */}
                <div className="right-panel">
                    <div id="link-container">
                        <Link to={"Sigchain"} className="sigchain-link">Sigchain
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </Link>
                    </div>
                    <div className="identities-container">
                        <ul className="identities-list">
                            {identitiesList}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    ) 
}



export default Home