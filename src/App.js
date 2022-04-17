import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// import EmailList from "./components/EmailList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Search from "./components/Search";

function App() {
  let [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="App ">
      <Search data={data} />
      <Filter data={data} />
    </div>
  );
}

export default App;
