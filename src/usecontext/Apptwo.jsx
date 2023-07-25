import React from "react";
import Compa from "./Compa";
import { createContext } from 'react'
// import { useState } from 'react'

export let useContext1 = createContext();

const Apptwo = () => {
  // let [user ,setuser]=useState("jaga")

  return (
    <>
      <useContext1.Provider value={"jaga"}>
        <Compa />
      </useContext1.Provider>
    </>
  );
};

export default Apptwo;
