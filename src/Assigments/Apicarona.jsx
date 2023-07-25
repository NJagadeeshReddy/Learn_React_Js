import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Apicarona = () => {
  let [state, setState] = useState({});

  useEffect(() => {
    axios
      .get("https://data.covid19india.org/data.json")
      .then((res) => setState(res.data.statewise[0]));
  }, []);
  console.log(state);
  return (
    <div>
      <h1 className="hint"><u>Covid API</u></h1>
      <div>
        <h2>
          <u><i>TOATAL INDIA COVID19 REPORT {state.lastupdatedtime} </i></u>
        </h2>
      </div>
      <ol>
        <li>Active Cases : {state.active}</li>
        <li>Confirmed : {state.confirmed}</li>
        <li>Deaths : {state.deaths}</li>
        <li>
          <ul>
            <span> <u>Delta report</u> </span>
            <li>Delta Confirmed : {state.deltaconfirmed}</li>
            <li>Delta Deaths : {state.deltadeaths}</li>
            <li>Delta Recovered : {state.deltarecovered}</li>
            <li>Total Recovered : {state.recovered}</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Apicarona;
