import './App.css'
import { Link } from 'react-router-dom';

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

function Home() {
  const displayName = did.subject.name;
  const bio = did.subject.bio;
  const displayImg = did.subject.displayImg;

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
            <div class="mb-4">
                <Link to={"Sigchain"} class="text-blue-500 hover:underline">Sigchain</Link>
            </div>

            <div>
                <div class="mb-2">
                    <a href="https://twitter.com/user" class="mr-2 hover:underline">
                        <i class="fab fa-twitter"></i> User
                    </a>
                    <a href="https://twitter.com/user/status/someID" class="text-gray-600 hover:underline">proof URL</a>
                </div>

                <div class="mb-2">
                    <a href="https://facebook.com/user" class="mr-2 hover:underline">
                        <i class="fab fa-facebook"></i> User
                    </a>
                    <a href="https://facebook.com/posts/someID" class="text-gray-600 hover:underline">proof URL</a>
                </div>

                <div class="mb-2">
                    <a href="https://reddit.com/u/user" class="mr-2 hover:underline">
                        <i class="fab fa-reddit"></i> User
                    </a>
                    <a href="https://reddit.com/r/someSubreddit/comments/someID" class="text-gray-600 hover:underline">proof URL</a>
                </div>
            </div>
        </div>
    </div>
</div>
  ) 
}


export default Home