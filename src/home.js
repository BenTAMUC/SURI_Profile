import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayName, setDisplayName] = useState('Placeholder Name');
  const [bio, setBio] = useState('Placeholder Bio');
  const [displayImg, setDisplayImg] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const didDocument = JSON.parse(event.target.result);
      setDisplayName(didDocument.subject?.name || '');
      setBio(didDocument.subject?.bio || '');
      setDisplayImg(didDocument.subject?.displayImg || '');
      setFileUploaded(true);
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl" id="main-content">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-4 text-center md:text-left">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto md:mx-0">
            {displayImg && <img src={displayImg} alt="Profile" className="w-full h-full object-cover rounded-full" />}
          </div>
          <h1 className="text-xl font-semibold mb-2">{displayName}</h1>
          <p className="text-gray-600">{bio}</p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col items-center justify-center">
            {fileUploaded ? (
              <div>
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
                  <div className="mb-2">
                    <a href="https://instagram.com/user" className="mr-2 hover:underline">
                      <i className="fab fa-instagram"></i> User
                    </a>
                    <a href="https://instagram.com/p/someID" className="text-gray-600 hover:underline">proof URL</a>
                  </div>
                  <div className="mb-2">
                    <a href="https://github.com/user" className="mr-2 hover:underline">
                      <i className="fab fa-github"></i> User
                    </a>
                    <a href="https://gist.github.com/user/someID" className="text-gray-600 hover:underline">proof URL</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="did-file-input" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer">
                  {fileUploaded ? 'Change DID Document' : 'Upload DID Document'}
                </label>
                <input type="file" id="did-file-input" className="hidden" onChange={handleFileInputChange} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;