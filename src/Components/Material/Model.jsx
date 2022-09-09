import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CancelOutlined, CheckCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TransitionsModal = React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "Fit",
    bgcolor: error ? "#b91c1c" : "#4d7c0f",
    boxShadow: 24,
    p: 4,
  };

  React.useImperativeHandle(ref, () => ({
    openModel() {
      setOpen(true);
    },
    enableError() {
      setError(true);
    },
  }));

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="!rounded-md">
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {error ? (
                <>
                  <CancelOutlined className="!text-[2.5rem] !text-gray-200 mr-[1rem]" />
                  <span className="text-gray-200">Payment Failed</span>
                </>
              ) : (
                <>
                  <CheckCircleOutline className="!text-[2.5rem] !text-gray-200 mr-[1rem]" />
                  <span className="text-gray-200">Payment Successful</span>
                </>
              )}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
});

export default TransitionsModal;
