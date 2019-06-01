import React from "react";
import "./App.css";
import styles from "./App.module.css";
import PeopleTable from "../PeopleTable/PeopleTable";

function App() {
  return (
    <div className="App">
      <div className="App-Grid-Container">
        <div className="App-Header">
          <h1 className={styles.mainTitle}>SWAPI People & Search</h1>
        </div>
        <div className="App-Main">
          <div className="SearchOuter" />
          <div className="tableOuter">
            <PeopleTable />
          </div>
        </div>
        <div className="App-Footer" />
      </div>
    </div>
  );
}

export default App;
