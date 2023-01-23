import React, { useState } from "react";
import { useData } from "./AppContext";
import { Auth } from "./Pages/Auth";
import Router from "./Router";

function RouterWrapper(props) {
  const { user, setUser, loading, setLoading } = useData();

  const handleFormSubmit = (mode, e) => {
    setLoading(true);
    console.log("form submitted");
    e.preventDefault();

    if (mode === "login") {
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      console.log(username, password);

      fetch(`http://127.0.0.1:5000/login/${username}/${password}/`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            setLoading(false);
            setUser({
              userType: data.userType,
              userName: username,
            });
          } else alert("Login Failed");
        });
    } else {
      const fullname = document.getElementById("su-fullname").value;
      const username = document.getElementById("su-username").value;
      const usertype = document.getElementById("su-usertype").value;
      const password1 = document.getElementById("su-createpassword").value;
      const password2 = document.getElementById("su-repeatpassword").value;
      const userTypes = ["viewer", "issuer", "verifier"];
      const userType =
        userTypes.indexOf(document.getElementById("su-usertype").value) + 1;

      if (userType === 0) {
        alert("Enter valid usertype");
        return;
      }
      if (password1 !== password2) {
        alert("password doesn't matched");
        return;
      }

      fetch(
        `http://127.0.0.1:5000/register/${username}/${password1}/${userType}/${fullname}/`
      )
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.status) {
            alert("User Registered Succussfully, Login to Continue");
            window.location.reload();
          } else alert(data.msg);
        });

      //   console.log(fullname, username, usertype, password1, password2);
    }
  };
  return (
    <>
      {loading && (
        <div className="loader-wrapper">
          <span class="loader"></span>
        </div>
      )}
      {user ? <Router /> : <Auth onSubmit={handleFormSubmit} />}
    </>
  );
}

export default RouterWrapper;
