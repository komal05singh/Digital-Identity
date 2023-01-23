import React, { useState } from "react";
import styledComponents from "styled-components";

export const ShareInput = ({ onShareClick }) => {
  const [inputvalue, setInputvalue] = useState("");

  return (
    <InputSectionStyle>
      <lable>Enter Username</lable>
      <input
        id="user-to-share"
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      <div className="btn" onClick={() => onShareClick(inputvalue)}>
        Share
      </div>
    </InputSectionStyle>
  );
};

const InputSectionStyle = styledComponents.div`

    background: white;
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    input{
        padding: 0.8rem;
        font-size: 1.1rem;
    }
          
          
          `;
