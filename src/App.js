import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState("");
  const [version, setVersion] = useState("");
  
  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_API_URL);
      const {joke, version } = await response.json();
      setJoke(joke);
      setVersion(version);
    })();
  }, [process.env.REACT_APP_API_URL])
  
  return (
    <>
      <div class="navbar bg-base-100">
        <a class="btn btn-ghost normal-case text-xl">API Version : {version}</a>
        <a class="btn btn-ghost normal-case text-xl">Front Version : {process.env.REACT_APP_VERSION} </a>
      </div>
      <div class="hero min-h-screen bg-base-200">
          <div class="hero-content text-center">
              <div class="max-w-md">
                  <h1 class="text-5xl font-bold text-red-500">{joke.category}</h1>
                  <p class="py-6">{joke.setup}</p>
                  <p class="py-6">{joke.delivery}</p>
                  <p class="py-6">{joke.joke}</p>
              </div>
          </div>
      </div>
    </>
  );
}

export default App;
