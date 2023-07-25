import React from "react";
import qa from "./qa";
import Acc from "./Acc";


const Accordion = () => {


    return (
        <div align="center">
            {qa.map((obj) => {
                let { id, question, ans } = obj
                return (
                    <>
                        <Acc
                            id={id} question={question} ans={ans} />
                    </>
                )
            })}
        </div>
    )
}
export default Accordion