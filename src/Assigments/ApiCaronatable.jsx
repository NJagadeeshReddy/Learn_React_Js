import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ApiCaronatable = () => {
    let [state, setState] = useState([]);

    useEffect(() => {
        axios
            .get("https://data.covid19india.org/data.json")
            .then((res) => setState(res.data.statewise));
    }, []);
    console.log(state);
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>sl.no</th>
                        <th>State</th>
                        <th>Active</th>
                        <th>Confiremed</th>
                        <th>Recovered</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((elem, index) => {
                        let { state, active, confirmed, deaths, recovered } = elem
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{state}</td>
                                <td>{active}</td>
                                <td>{confirmed}</td>
                                <td>{recovered}</td>
                                <td>{deaths}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
};

export default ApiCaronatable