import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {

  return (
    <>
      <div className="bg-gray-100 flex justify-between p-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl font-bold mb-4">Welcome to Ollama v0</h1>
      <div className="card p-6 bg-green-100 rounded-xl">
        
      </div>
    </>
  );
}

export default App;
