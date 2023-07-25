import React, { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Acc = (props) => {
    let { id, question, ans } = props;
    let [state, setState] = useState(true);
    let handleClick = () => {
        setState(!state);
    };
    return (
        <div>
            <p className="QS" onClick={handleClick} style={{ cursor: "pointer" }}>
                <span key={id}>
                    {id}. {question}
                </span>
                <span className="sp">
                    {state ? <NavigateBeforeIcon /> : <ExpandMoreIcon />}
                </span>
            </p>
            {state ? "" : <p className="As">{ans}</p>}
        </div>
    );
};
export default Acc;
