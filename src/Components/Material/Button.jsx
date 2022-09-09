import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButton({ text, bgColor }) {
  return (
    <Stack spacing={1} direction="row">
      <Button
        variant="contained"
        style={{
          width: "100%",

          color: "whitesmoke",
          backgroundColor: bgColor,
          fontWeight: "800",
        }}
      >
        {text}
      </Button>
    </Stack>
  );
}
