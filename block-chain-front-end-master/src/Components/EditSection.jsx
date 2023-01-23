import React, { useState } from "react";
import styledComponents from "styled-components";
import Dialog from "./Dialog";
import DocumentHistory from "./DocumentHistory";
import { ShareInput } from "./ShareInput";

export const Buttons = ({ onShareClick, onVarify, isVarifier }) => (
  <ButtonsStyle>
    {isVarifier ? (
      <div className="btn" onClick={onVarify}>
        Verify
      </div>
    ) : (
      <>
        <div className="btn">Edit</div>
        <div className="btn" onClick={onShareClick}>
          Share
        </div>
      </>
    )}
  </ButtonsStyle>
);

// function EditSection({ isVarifier }) {
//   const [showSharePopup, setShowSharePopup] = useState(false);

//   const handleShareClick = () => {
//     setShowSharePopup((old) => !old);
//   };

//   const onVarify = () => {
//     alert("varifiing");
//   };

//   return (
//     <>
//       <Dialog
//         showDialog={showSharePopup}
//         setShowDialog={setShowSharePopup}
//         body={<ShareInput onDoneClick={handleDone} />}
//         header="share your document"
//       />
//       <EditSectionStyle>
//         <DocumentHistory />
//         <Buttons
//           onShareClick={handleShareClick}
//           isVarifier={isVarifier}
//           onVarify={onVarify}
//         />
//       </EditSectionStyle>
//     </>
//   );
// }

// export default EditSection;

// const EditSectionStyle = styledComponents.section`
//     display: grid;
//     grid-template-columns: 7fr 1fr;
//      min-height: 200px;
//      background: white;

// `;

const ButtonsStyle = styledComponents.section`

display : flex;
.btn{
  height: fit-content;
  margin: 1rem;
  width: 100px;
  text-align: center;
}

`;
