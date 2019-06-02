import React, { useState, useEffect } from "react";
import "./App.css";
import styles from "./App.module.css";
import PeopleTable from "../PeopleTable/PeopleTable";
import PageNumbers from "../PageNumbers/PageNumbers";
import SearchBar from "../SearchBar/SearchBar";
import swapi from "../../services/swapi";
import fakeData from "../../services/tests/testData.json";
const Modes = { list: "list", search: "search" };
const App = () => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState([]);
  //mode can be "list" or "search";
  const [mode, setMode] = useState(Modes.list);
  const [searchTerm, setSearchTerm] = useState("");
  const requestPeople = pageNo => {
    const req = swapi.getPeopleList(pageNo);
    req.then(data => {
      setCount(data.count);
      setPeople(data.results);
    });
  };
  const searchPeople = (searchWords, pageNo) => {
    let term = searchWords;
    if(term === ""){
      term = searchTerm;
    }
    const req = swapi.getPeopleBySearch(term, pageNo);
    req.then(data => {
      setCount(data.count);
      setPeople(data.results);
    });
  };
  const pageNoOnClick = value => {
    let requestPageNo;
    switch (value) {
      case "previous":
        requestPageNo = page - 1;
        break;
      case "next":
        requestPageNo = page + 1;
        break;
      default:
        requestPageNo = value;
        break;
    }
    if (isNaN(requestPageNo) || requestPageNo < 1) {
      requestPageNo = 1;
    }
    if (mode === Modes.list) {
      requestPeople(requestPageNo);
    } else {
      searchPeople(searchTerm, requestPageNo);
    }

    setPage(requestPageNo);
    setPeople([]);
  };
  const searchHandler = searchWords => {
    console.log(searchWords);
    setSearchTerm(searchWords);
    setMode(Modes.search);
    searchPeople(searchWords);
    setPage(1);
    setPeople([]);
  };
  useEffect(() => {
    const req = swapi.getPeopleList(page);
    req.then(data => {
      console.log(data);
      setCount(data.count);
      setPeople(data.results);
    });
    /*
    let data = fakeData;
    setCount(data.count);
    setPeople(data.results);
    */
  }, []);
  return (
    <div className="App">
      <div className="App-Grid-Container">
        <div className="App-Header">
          <h1 className={styles.mainTitle}>SWAPI People & Search</h1>
        </div>
        <div className="App-Main">
          <div className="SearchOuter">
            <SearchBar onSearch={searchHandler} />
          </div>
          <div className="tableOuter">
            <PeopleTable people={people} />
          </div>
        </div>
        <div className="App-Footer">
          <PageNumbers
            peopleCount={count}
            cb={pageNoOnClick}
            currentPage={page}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
