import logo from "../logo.svg";
import "../App.css";
import FeaturesSelector from "../Components/FeaturesSelector";
import Navigation from "../Components/Navigation";
import styledComponents from "styled-components";
import { useEffect, useState } from "react";
import DocumentViewerSection from "../Components/DocumentViewerSection";
import { useData } from "../AppContext";
import DocumentHistory from "../Components/DocumentHistory";
import { Buttons } from "../Components/EditSection";
import { parseData } from "../Components/functions";
import React from "react";

function Varifier() {
  const {
    data,
    setData,
    selectedDoc,
    setSelectedDoc,
    setSelectedHistoryIndex,
    loading,
    setLoading,
    user,
  } = useData();

  const handleShare = () => {
    alert("handle share");
  };

  const fetchData = async () => {
    console.log("fetching data...");
    var raw = "";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    setLoading(true);
    await fetch(
      `http://127.0.0.1:5000/verifier/${user.userName}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const rawData = {};
        Object.keys(result).map((key) => {
          rawData[result[key]["_id"]["$oid"]] = [
            {
              ...result[key],
            },
          ];
        });
        setLoading(false);
        setData(rawData);
        console.log(rawData);
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSelectedDoc(false);
  }, [data]);

  useEffect(() => {
    setSelectedHistoryIndex(0);
  }, [selectedDoc]);

  console.log(selectedDoc);

  const varifyDoc = () => {
    // console.log(selectedDoc);
    setLoading(true);
    const selectedDocUserName = selectedDoc[0].userName;
    const docName = selectedDoc[0].documentName;
    fetch(
      `http://127.0.0.1:5000/verifier/${selectedDocUserName}/${docName}/verify`
    )
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.varified) alert("Verified");
        else alert("Verified");
      });
  };

  return (
    <AppStyle>
      {loading && (
        <div className="loader-wrapper">
          <span class="loader"></span>
        </div>
      )}
      <Navigation
        docs={data}
        selectedDocId={selectedDoc ? selectedDoc[0]._id : false}
        onDocumentCardClick={(doc) => setSelectedDoc(doc)}
        isVerifier
      />
      <div className="right">
        <div className="top custom-scrollbar">
          {selectedDoc ? (
            <DocumentViewerSection />
          ) : (
            <div className="empty-placeholder">Nothing to show</div>
          )}
        </div>
        <div className="bottom">
          {/* {selectedDoc && <DocumentHistory />} */}
          {selectedDoc && <Buttons isVarifier onVarify={varifyDoc} />}
        </div>
      </div>
    </AppStyle>
  );
}

const AppStyle = styledComponents.main`
height: 100vh;
background: var(--clr-light-grey);
  display:grid;
  grid-template-columns: auto 1fr;

  .empty-placeholder{
    padding: 1rem;
    text-align: center;
    width: 90%;
    font-size: 1.3rem;
    font-weight: 600;
  }
    .right{
      display: grid;
      grid-template-rows: 4fr 2fr;

      .top{
        box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
        min-width: 800px;
        max-width: 900px;
        margin: auto;
        // border: 2px solid dodger;
        overflow: auto;

      }
      .bottom{
        box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
        max-width: 800px;
        margin-inline: auto;
        background: white;
        display: grid;
        grid-template-columns: 4fr 2fr;
        height: 30vh;
      }
    }
`;

export default Varifier;
