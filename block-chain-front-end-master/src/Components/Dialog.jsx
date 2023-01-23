import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

function Dialog({ header, body, showDialog, setShowDialog, className }) {
  const [came, setCame] = useState(false);
  const [out, setOut] = useState(!showDialog);

  useEffect(() => {
    if (showDialog) {
      setOut(false);
      setTimeout(() => {
        setCame(true);
      }, 40);
    } else {
      setCame(false);
      setTimeout(() => {
        setOut(true);
      }, 400);
    }
  }, [showDialog]);

  return !out ? (
    <DialogStyle
      style={{
        opacity: came ? "1" : "0",
      }}
      className={"fade " + className}
    >
      <div
        className="model ease-in"
        style={{
          transform: came ? "translateY(0)" : "translateY(-10vh)",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/close.svg`}
          alt="close"
          className="close"
          onClick={() => setShowDialog(false)}
        />
        {header && <div className="header ft-mar">{header}</div>}
        <div className="model-body ft-lt">{body}</div>
      </div>
    </DialogStyle>
  ) : (
    <></>
  );
}

export default Dialog;

export const DialogStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden !important;
  display: grid;
  place-items: center;
  .model {
    position: relative;
    background: #f8f9fb;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: fit-content;
    /* max-width: 800px; */
    color: black;
    min-width: 400px;
    max-height: 90vh;
    margin: 1rem;

    .close {
      z-index: 10;
      position: absolute;
      right: 0;
      top: 0;
      padding: 1rem;
      cursor: pointer;
      :hover {
        opacity: 0.8;
      }
    }

    .header {
      font-size: 1.4rem;
    }
    .model-body {
      overflow: auto;
      width: 100%;
      height: 100%;
      max-height: 75vh;
      background: white;
      margin: 2rem 0;
    }
  }
`;
