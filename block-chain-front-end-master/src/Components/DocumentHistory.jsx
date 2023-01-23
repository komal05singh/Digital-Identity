import React, { useEffect, useState } from "react";
import styledComponents from "styled-components";
import { useData } from "../AppContext";
import { parseData } from "./functions";
import Stepper from "./Stepper";

function DocumentHistory(props) {
  const { selectedDoc, setSelectedHistoryIndex } = useData();
  const [history, setHistory] = useState(false);

  useEffect(() => {
    setHistory(selectedDoc.map((doc) => doc.timestamp["$date"]));
  }, [selectedDoc]);

  console.log(history);
  const handleStepClick = (index) => {
    setSelectedHistoryIndex(index);
  };

  return history ? (
    <DocumentHistoryStyle>
      <div className="history-title">Edit History</div>
      <Stepper steps={history} handleStepClick={handleStepClick} />
    </DocumentHistoryStyle>
  ) : (
    <></>
  );
}

export default DocumentHistory;

const DocumentHistoryStyle = styledComponents.section`
    padding: 1rem 2rem;
    .history-title{
      margin-bottom: 1rem ;
      padding-bottom: 0.5rem ;
      font-size: 1.2rem;
      font-weight: 600;
      border-bottom: 1px solid rgba(0,0,0,0.3);
    }

`;
