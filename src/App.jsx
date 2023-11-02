import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayName, setDisplayName] = useState('Placeholder Name');
  const [bio, setBio] = useState('Placeholder Bio');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const didDocument = JSON.parse(event.target.result);
      setDisplayName(didDocument.displayName);
      setBio(didDocument.bio);
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl" id="main-content">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-4 text-center md:text-left">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto md:mx-0"></div>
          <h1 className="text-xl font-semibold mb-2">{displayName}</h1>
          <p>{bio}</p>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <div className="mb-4">
            <a href="top-level-domain/sigchain" className="text-blue-500 hover:underline">Sigchain</a>
          </div>
          <div>
            <div className="mb-2">
              <a href="https://twitter.com/user" className="mr-2 hover:underline">
                <i className="fab fa-twitter"></i> User
              </a>
              <a href="https://twitter.com/user/status/someID" className="text-gray-600 hover:underline">proof URL</a>
            </div>
            <div className="mb-2">
              <a href="https://facebook.com/user" className="mr-2 hover:underline">
                <i className="fab fa-facebook"></i> User
              </a>
              <a href="https://facebook.com/posts/someID" className="text-gray-600 hover:underline">proof URL</a>
            </div>
            <div className="mb-2">
              <a href="https://reddit.com/u/user" className="mr-2 hover:underline">
                <i className="fab fa-reddit"></i> User
              </a>
              <a href="https://reddit.com/r/someSubreddit/comments/someID" className="text-gray-600 hover:underline">proof URL</a>
            </div>
            <div>
              <form>
                <label htmlFor="fileInput">Choose a file:</label>
                <input type="file" id="fileInput" name="fileInput" onChange={handleFileInputChange} />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;