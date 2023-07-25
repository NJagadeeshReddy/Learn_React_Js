import axios from "axios";
import React, { useEffect, useState } from "react"



const SuperTable = () => {
  let [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => setState(res.data));
  }, []);
  console.log(state);
  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Powerstats</th>
            <th>Apperance</th>
          </tr>
        </thead>
        <tbody>
          {state.map((elem, index) => {
            let { id, name, appearance, powerstats, images } = elem;


            return (
              <tr>
                <td>{index}</td>
                <td>{id}</td>
                <td>{name}</td>

                <td>  <img src={images.xs} alt="img" /> a</td>
                <td> <button className="btn-ps" onClick={() => {
                  alert(
                    `
                1.Intelligence: ${powerstats.intelligence}
                2.Stewngth: ${powerstats.strength}
                3.Speed: ${powerstats.speed}
                4.Durability: ${powerstats.durability}
                5.Power: ${powerstats.power}
                6.Combat: ${powerstats.combat}
                `
                  )
                }} >Powerstates</button></td>
                <td> <button className="btn-ps" onClick={() => {
                  alert(`  Appearance
              1.race: ${appearance.race}
              2.Gender :{appearance.gender}
              3.Race:{appearance.race}
              4.Height:{appearance.height[0]}
              5.Weight:{appearance.weight[1]}`)
                }}>Appearance</button></td>
              </tr>
            );
          })}
        </tbody>

      </table>
    </>
  );
};

export default SuperTable;
