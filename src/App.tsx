import React from 'react';

function App() {
  return (
    <div className="container mx-auto sm:w-auto md:w-1/3 lg:w-1/3 sm:px-10 px-10 md:px-1 lg:px-2 py-10">
      <div className="w-full">
          <img className="h-20 w-20 rounded-full ring-2 ring-blue mx-auto" src="https://avatars.githubusercontent.com/u/42344171?v=4" alt="Albert"></img>
      </div>

      <div className="text-center mt-3">
        <h1 className="text-2xl font-bold">Albert Akrong</h1>
        <small className="text-md font-semibold text-gray-400">Fullstack Engineer (previously: a shadow monarch)</small>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Bio</h2>
        <p className="leading-7">Hey there 👋, I'm a <span className="text-yellow-500"><del>shadow monarch lost in  a human world</del></span> <span>full stack engineer.</span></p>
        <p className="leading-7">🔭 I'm currently working @ <a className="underline text-blue-400 hover:text-blue-500 visited:text-purple-400" href="https://sovtech.com">Sovtech</a> and my day job involves building scaleable software using Typscript, NodeJS, React, React Native, Graphql, AWS and more.</p>
        <p className="leading-7">🚀 I'm learning to build machine learning applications and i write about them occassionally.</p>
        <p className="leading-7">🎮 I like games, music, books, comics and  I'm fascinated by physics space exploration</p>
        <p className="leading-7">💭 My dream: 
            <code className="bg-yellow-500 text-gray-900 rounded-md font-mono">
              {" while(sleeping){money++;} "}
            </code>
        </p>
        <p className="leading-7">⚡ Fun fact: If you traveled at the speed of light, time would stop</p>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="leading-7">I am open to inconsequential conversations. Feel free to reach out</p>
        <ul className="leading-7 list-disc px-4">
          <li>Email: <a className="underline text-blue-400" href="mailto:alphaxsalt@gmail.com">alphaxslat@gmail.com</a></li>
          <li>Github: <a className="underline text-blue-400" href="https://github.com/alphaofficial">@alphaofficial</a></li>
          <li>Twitter: <a className="underline text-blue-400" href="https://twitter.com/alphaxsalt">@alphaxsalt</a></li>
          <li>Blog: <a className="underline text-blue-400" href="https://alphaxsalt.medium.com">@alphaxsalt</a></li>
        </ul>
        
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Portfolio (Coming soon)</h2>
        <p className="leading-7">I will be showing off in this section 😜</p>
      </div>
    </div>
  );
}

export default App;
