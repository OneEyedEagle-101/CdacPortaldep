import { Button } from "@mui/material";
import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

export default function CustomToggle(props) {
  const disableOthers = (e) => {
    for (var i = 0; i < 4; i++) {
      if (document.getElementById("check1" + i).checked) {
        document.getElementById("check2" + i).disabled = true;
        continue;
      }
      document.getElementById("check1" + i).disabled = true;
      document.getElementById("check2" + i).disabled = true;
    }
  };
  return (
    <>
      <label for="option">
        <input
          id={props.id1}
          type="radio"
          value="true"
          name={props.name}
          onClick={disableOthers}
        />
        Correct
      </label>
      <label for="option">
        <input
          id={props.id2}
          type="radio"
          value="false"
          name={props.name}
          checked
        />
        Wrong
      </label>
    </>
  );
}
