import React from "react";
import styledComponents from "styled-components";

function DocumentCard({ doc, isSelected, onUserCardClick, isVerifier }) {
  return (
    <DocumentCardStyle
      style={{
        border: isSelected ? "2px solid blue" : "2px solid transparent",
      }}
      onClick={() => onUserCardClick(doc)}
    >
      {isVerifier && <div className="name username">{doc[0].userName}</div>}
      <div className="name">{doc[0].documentName}</div>
    </DocumentCardStyle>
  );
}

const DocumentCardStyle = styledComponents.div`
    

background-color: white;
border-radius: 8px;
padding: 1rem;
margin: 0.5rem;
color: black;
cursor: pointer;

.name{
    font-weight: 400;
    padding: 0.5rem;

}

.username{
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--clr-primary);
}


`;

export default DocumentCard;
