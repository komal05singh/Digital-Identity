import React from "react";
import styledComponents from "styled-components";
import FeaturesSelector from "./FeaturesSelector";

function UserForm({ onSubmit, features, setFeatures }) {
  return (
    <UserFormStyle>
      <FeaturesSelector
        onSubmit={onSubmit}
        features={features}
        setFeatures={setFeatures}
      />
    </UserFormStyle>
  );
}

export default UserForm;

const UserFormStyle = styledComponents.div``;
