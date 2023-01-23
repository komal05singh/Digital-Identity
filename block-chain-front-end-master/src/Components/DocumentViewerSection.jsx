import React, { useState } from "react";
import styledComponents from "styled-components";
import { useData } from "../AppContext";
import EditSection from "./EditSection";
import UserForm from "./UserForm";

function DocumentViewerSection() {
  const { selectedDoc, selectedHistoryIndex } = useData();
  console.log(selectedHistoryIndex);
  const document = selectedDoc[selectedHistoryIndex];
  return document ? (
    <DocumentViewerSectionStyle>
      <div className="wrapper">
        <div className="name">{document.documentName}</div>
        <div className="date-wrapper">
          <div className="title">Issue Date</div>
          <div className="date">{document.timestamp.$date}</div>
        </div>
        <div className="fields-wrapper">
          <div className="title">Fields</div>
          <div className="fields">
            <div className="field">
              <table>
                {Object.keys(document.documentData).map((key) => (
                  <tr>
                    <td>
                      <div className="key">{key}</div>
                    </td>
                    <td>
                      <div className="value">{document.documentData[key]}</div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
        {/* <div className="shared-users">
          <div className="title">Shared With</div>
          <div className="users">
            <div className="user">chaitanya360</div>
            <div className="user">omkar12</div>
          </div>
        </div> */}
      </div>
    </DocumentViewerSectionStyle>
  ) : (
    <>No Document Selected</>
  );
}

export default DocumentViewerSection;

const DocumentViewerSectionStyle = styledComponents.section`
width: 100%:
display: flex;
flex-direction: column;
.wrapper{
  
  box-shadow: 0px 1px 2px rgba(0,0,0,0.2);
  
  background: white;
}

.title{
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 1rem;
  color: var(--clr-text);
  
}

.name{
  // background: #8000801e;
  background: #ffc0cb3d;

  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(0,0,0,0.3);
  }
  
  .date-wrapper{
    border-bottom: 1px solid rgba(0,0,0,0.3);
    padding: 1rem;
    // background: #ffff001c;
  }
  
  .fields-wrapper{
    padding: 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    // background: #0080002f;
    table{
      min-width: 300px;
      border-spacing: 0;
      td{
        padding: 0.5rem 1rem;
      }
      tr{
        background: #00ff1e40;
        :nth-child(even){
          background: #60f04094;
        }
        .key{
          font-weight: 600;
        }
      }
    }
   
  }
  
  .shared-users{
    padding: 1rem;

    .user{
      padding: 0.3rem 0;
    }
  }

`;
