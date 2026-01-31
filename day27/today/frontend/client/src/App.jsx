import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form action="http://localhost:4000/" method="POST">
        <input type="text" name="username"/>
        <input type="submit" />
      </form>
    </>
  );
}

export default App;
