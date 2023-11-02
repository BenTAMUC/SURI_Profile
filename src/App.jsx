import './App.css'

function App() {

  return(
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-xl" id="main-content">
    <div class="flex flex-col md:flex-row items-center md:items-start">

        <div class="md:w-1/2 mb-6 md:mb-0 pr-0 md:pr-4 text-center md:text-left">
            <div class="w-16 h-16 bg-gray-300 rounded-full mb-4 mx-auto md:mx-0"></div>
            <h1 class="text-xl font-semibold mb-2">displayName</h1>
            <p>bio</p>
        </div>


        <div class="md:w-1/2 text-center md:text-left">
            <div class="mb-4">
                <a href="top-level-domain/sigchain" class="text-blue-500 hover:underline">Sigchain</a>
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


export default App