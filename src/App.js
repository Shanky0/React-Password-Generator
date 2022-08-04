
import { useState } from 'react';
import './App.css';

function App() {

  // State to hold password
  const [password, setPassword] = useState("");
  var passw = "";

  const genrate = (e) => {
    e.preventDefault();

    passw= "";
    const smallLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "@"];


    // Loop to genrate random index for password
    for (let i = 0; i < 3; i++) {
      passw += smallLetter[Math.floor(1 + Math.random() * 25)];
      passw += smallLetter[Math.floor(1 + Math.random() * 25)].toUpperCase();
      passw += number[Math.floor(1 + Math.random() * 9)];

    }

    document.querySelector("#pass").innerHTML = `Password is : ${passw}`;
    document.querySelector("#pass").style="color:green";


  }
  const copy = (e) => {
    e.preventDefault();

    if (passw === "") {
      document.querySelector("#pass").innerHTML = "Genrate password first";
      document.querySelector("#pass").style="color:red";
    } else {
      setPassword(passw);
      alert(`Your password (${passw}) is copied`);
    }


  }
  return (
    <>
      <div className='container'>
        <button onClick={genrate}>Click to Genrate Password</button>
        <p id='pass'></p>
        <button onClick={copy}>Click to Copy Password</button>
      </div>
    </>
  );
}

export default App;
