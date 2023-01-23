import React, { useState } from "react";
import styledComponents from "styled-components";
import { useData } from "../AppContext";
import UserForm from "../Components/UserForm";

function Issuer(props) {
  const { loading, setLoading } = useData();

  const [features, setFeatures] = useState([]);

  const issueDocument = (values) => {
    setLoading(true);

    console.log("fetching...");

    fetch(`http://127.0.0.1:5000/issuer/${JSON.stringify(values)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.issued) alert("Issue Successfully");
        else alert("Wrong Username / Document Name");
        setLoading(false);
        console.log(data);
        setFeatures([]);
      });
  };
  return (
    <>
      {loading && (
        <div className="loader-wrapper">
          <span class="loader"></span>
        </div>
      )}
      <IssuerStyle>
        <UserForm
          onSubmit={issueDocument}
          features={features}
          setFeatures={setFeatures}
        />
      </IssuerStyle>
    </>
  );
}

export default Issuer;

const IssuerStyle = styledComponents.main`
    
 margin: auto;
 width: fit-content;

`;
