import { useState } from "react";
import Logo from "./assets/logo.svg";
import "./App.css";
import List from "./components/List";
import data from "./users.json";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <div className="rotating-logo">
          <a href="#" target="_blank">
            <img src={Logo} className="logo react" alt="Birthday logo" />
          </a>
        </div>
        <section>
          <h3>There are {people.length} Birthdays Today</h3>
          <List people={people} />

          <button className="clear-btn" onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </>
  );
}

export default App;
