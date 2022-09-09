import { TextField } from "@mui/material";
import React from "react";

const TextFieldBasic = ({ value }) => {
  return (
    <TextField
      id="filled-read-only-input"
      //   label="Read Only"
      defaultValue={value}
      style={{ width: "100%" }}
      InputProps={{
        readOnly: true,
      }}
      variant="outlined"
    />
  );
};

export default TextFieldBasic;
