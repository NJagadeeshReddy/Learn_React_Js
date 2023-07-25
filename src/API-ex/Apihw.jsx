import React, { useEffect, useState } from "react";
import axios from "axios";
const Apihw = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setState(res.data));
  }, []);

  return (
    <div>
      <h1 className="hint">Api-Hw</h1>
      <table border={2} style={{ border: "collapse" }}>
        <thead>
          <tr>
            <th>index</th>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {state.map((temp, index) => {
            let { id, name, email } = temp;
            return (
              <>
                <tr key={index}>
                  <td>{index}</td>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Apihw;
