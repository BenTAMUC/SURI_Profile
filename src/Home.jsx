import './App.css'
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
    const [identitiesList, setidentitiesList] = useState([])
  const displayName = did.subject.name;
  const bio = did.subject.bio;
  const displayImg = did.subject.displayImg;

  useEffect(()=> {
    for(let i = 0; i < sig.length; i++){
        if(sig[i].type === "verify"){
            let list = identitiesList
            list.push(<li><IdentityCard credential = {sig[i]}/></li>)
            setidentitiesList(list)
        }
    }
    },[])

  return(
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-xl" id="main-content">
    <div class="flex flex-col md:flex-row items-center md:items-start">

        <div class="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-4 text-center md:text-left">
            <div class="w-16 h-16 bg-red-300 rounded-full mb-4 mx-auto md:mx-0">
              <img src = {displayImg}></img>
            </div>
            <h1 class="text-xl font-semibold mb-2">{displayName}</h1>
            <p>{bio}</p>
        </div>


        <div class="md:w-1/2 text-center md:text-left">
            <div class="mb-4 flex-row">
                <Link to={"Sigchain"} class="text-black hover:underline">Sigchain<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></Link>
            </div>

            <div>
                <ul>
                    {identitiesList}
                </ul>
            </div>
        </div>
    </div>
</div>
  ) 
}



export default Home