import React, { useEffect, useState } from "react";
import "./use.css"
const Apicomp = () => {
  let [state, setState] = useState([]);
  function Api() {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data) => setState(data));
  }
  // axios.get("https://fakestoreapi.com/products")
  // .then(res=>setState(res.data))

  useEffect(() => {
    Api();
  }, []);
  return (
    // <div>
    //   <table border={1}>
    //     <thead>
    //       <tr>
    //         <th>user Id</th>
    //         <th>user name </th>
    //         <th>user Image</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {state.map((elem) => {
    //         let { login, id, avatar_url } = elem;
    //         return (
    //           <tr>
    //             <td>{id}</td>
    //             <td>{login}</td>
    //             <td><img style={{width:"100px"}} src={avatar_url} alt="" /></td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>

    <>
      <h1 className="hint">Fake App</h1>
      <div className="grid-api">

        {state.map((elem, index) => {
          let { id, title, image } = elem
          return (
            <>
              <div className="grid-back" key={index}>
                <div className="index">{index}</div>
                <img className="grid-img" src={image} alt="img" />
                <div className="titles">{id}.{title}</div>
              </div>
            </>
          )
        })}
      </div>
    </>
  );
};

export default Apicomp;
