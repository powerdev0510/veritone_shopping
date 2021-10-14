import React from "react";

import Dialog from "@mui/material/Dialog";

interface Props {
  open: boolean;
  onClose: () => void;
}

const DeleteItemDialog: React.FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return <Dialog onClose={handleClose} open={open}></Dialog>;
};

export default DeleteItemDialog;
