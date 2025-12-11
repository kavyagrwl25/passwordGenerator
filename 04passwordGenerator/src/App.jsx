import { useCallback, useState, useEffect } from "react";

function App() {
  const [Length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 1; i <= Length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [Length, numAllowed, charAllowed, setPassword]);

  useEffect(()=> {
    generatePassword();
  }, [generatePassword, Length, numAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-lg bg-gray-800 flex  flex-col text-orange-500">
        <h1 className="text-white my-2 mb-3 text-center">
          Password Generator
        </h1>
        <div className="w-full max-w-md bg-gray-200 rounded-lg flex">
          <input
            type="text"
            className="outline-none w-full py-2 px-3"
            placeholder="password"
            value={password}
            readOnly
          />
          <button className="outline-none bg-blue-600 px-3 rounded-r cursor-pointer text-white hover:bg-blue-700 shrink-0"
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-4 py-4 items-center">
          <div className="flex gap-x-3 items-center ">
            <input
              type="range"
              min={6}
              max={50}
              value={Length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="">Length: {Length}</label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);   //changing previous state from false to true and vice versa
              }}
            />{" "}
            <label htmlFor="numInput">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);   //changing previous state from false to true and vice versa
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;