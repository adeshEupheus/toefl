import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Snackbars = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const snackbarRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    openSnackbar() {
      setOpen(true);
    },
  }));

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }} ref={snackbarRef}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={props.error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {props.errMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
});

export default Snackbars;
