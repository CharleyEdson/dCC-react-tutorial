import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";


function App() {

  const [entries, setEntries] = useState([{ weight: 175, date: "11-16-2022" },{ weight: 176, date: "11-17-2022" }]);

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
    </div>
  );
}

export default App;
