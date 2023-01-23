import React, { useState } from "react";
import { useEffect } from "react";
import styledComponents from "styled-components";
import { useData } from "../AppContext";

function Stepper({ steps = [1, 2, 3], _activeStepIndex = 1, handleStepClick }) {
  const { selectedHistoryIndex } = useData();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    setActiveStepIndex(selectedHistoryIndex);
  }, [selectedHistoryIndex]);

  return (
    <StepperStyle>
      {steps.map((step, index) => (
        <div
          class={activeStepIndex == index ? "step step-active" : "step"}
          onClick={() => {
            setActiveStepIndex(index);
            handleStepClick(index);
          }}
        >
          <div>
            <div class="circle">
              <div class="circle">{index + 1}</div>
            </div>
          </div>
          <div>
            <div class="title">{step}</div>
            {/* <div class="caption">Optional</div> */}
          </div>
        </div>
      ))}
    </StepperStyle>
  );
}

export default Stepper;

const StepperStyle = styledComponents.div`

    overflow: auto;
    height: 23vh;

    /* Steps */
    .step {
        cursor: pointer;
      position: relative;
      min-height: 1em;
      color: gray;
    }
    .step + .step {
      margin-top: 1.5em
    }
    .step > div:first-child {
      position: static;
      height: 0;
    }
    .step > div:not(:first-child) {
      margin-left: 1.5em;
      padding-left: 1em;
    }
    .step.step-active {
      color: #4285f4
    }
    .step.step-active .circle {
      background-color: #4285f4;
    }
    
    /* Circle */
    .circle {
      background: gray;
      position: relative;
      width: 1.5em;
      height: 1.5em;
      line-height: 1.5em;
      border-radius: 100%;
      color: #fff;
      text-align: center;
      box-shadow: 0 0 0 3px #fff;
    }
    
    /* Vertical Line */
    .circle:after {
      content: ' ';
      position: absolute;
      display: block;
      top: 1px;
      right: 50%;
      bottom: 1px;
      left: 50%;
      height: 100%;
      width: 1px;
      transform: scale(1, 2);
      transform-origin: 50% -100%;
      background-color: rgba(0, 0, 0, 0.25);
      z-index: -1;
    }
    .step:last-child .circle:after {
      display: none
    }
    
    /* Stepper Titles */
    .title {
      line-height: 1.5em;
      font-weight: bold;
    }
    .caption {
      font-size: 0.8em;
    }
`;
