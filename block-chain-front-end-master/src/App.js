import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FeaturesSelector from "./Components/FeaturesSelector";
import Navigation from "./Components/Navigation";
import styledComponents from "styled-components";
import { useEffect, useState } from "react";
import DocumentViewerSection from "./Components/DocumentViewerSection";
import { useData } from "./AppContext";
import DocumentHistory from "./Components/DocumentHistory";
import { Buttons } from "./Components/EditSection";
import { parseData } from "./Components/functions";
import Dialog from "./Components/Dialog";
import { ShareInput } from "./Components/ShareInput";

function App() {
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

  const [showDialog, setShowDialog] = useState(false);

  const handleShare = (inp) => {
    console.log("handle share function")
    setLoading(true);
    const from = selectedDoc[0].userName;
    const to = document.getElementById("user-to-share").value;
    if (to === "") {
      alert("Enter username");
      return;
    }
    console.log("to value  =  ",to)
    const docName = selectedDoc[0].documentName;

    fetch(`http://127.0.0.1:5000/view/${from}/${to}/${docName}/share`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setShowDialog(false);
        if (data.status) alert("share success");
        else alert(data.msg);
      });
  };

  const fetchData = async () => {
    console.log("fetching data...");
    setLoading(true);
    var raw = "";

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(`http://127.0.0.1:5000/view/${user.userName}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result);
        console.log("App.js console")
        console.log(data);  //tesing getting data or not
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
    console.log("😒😒")
  }, [selectedDoc]);

  console.log("selected doc ") //testing
  console.log(selectedDoc);

  return (
    <AppStyle>
      <Dialog
        header={"Enter username to share"}
        body={<ShareInput onShareClick={handleShare} />}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
      />
      {loading && (
        <div className="loader-wrapper">
          <span class="loader"></span>
        </div>
      )}
      <Navigation
        docs={data}
        selectedDocId={selectedDoc ? selectedDoc[0]._id : false}
        onDocumentCardClick={(doc) => setSelectedDoc(doc)}
      />
      <div className="right">
        <div className="top custom-scrollbar">
          {selectedDoc ? (
            <DocumentViewerSection />
          ) : (
            <div className="empty-placeholder">
              Select Document First to View
            </div>
          )}
        </div>
        <div className="bottom">
          {selectedDoc && <DocumentHistory />}
          {selectedDoc && <Buttons onShareClick={() => setShowDialog(true)} />}
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

export default App;
