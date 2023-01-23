import React from "react";
import styledComponents from "styled-components";
import DocumentCard from "./DocumentCard";

function Navigation({ docs, selectedDocId, onDocumentCardClick, isVerifier }) {
  console.log(isVerifier);
  return (
    <NavigationStyle>
      {Object.keys(docs).map((docName) => {
        const doc = docs[docName];
        return (
          <DocumentCard
            key={doc._id}
            doc={doc}
            isSelected={doc[0]._id == selectedDocId}
            onUserCardClick={onDocumentCardClick}
            isVerifier={isVerifier}
          />
        );
      })}
    </NavigationStyle>
  );
}

export default Navigation;

const NavigationStyle = styledComponents.nav`
 width: 300px;
 color: white;
 height: 100vh;
 overflow: auto;

`;
