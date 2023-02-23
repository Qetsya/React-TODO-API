import { useState } from "react";
import { Button } from "@mui/material";

import {Modal} from "@mui/material";
import {Box} from "@mui/material";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 552,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: 1,
  zIndex: 1000,
};

export const AddNewTodo = ({children}) => {
    const [open, setOpen] = useState(false);
    return (
        <Box marginBottom={4}>
            <Button variant="contained" onClick={()=> setOpen(true)}>
                Add new Todo
            </Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>{children}</Box>
            </Modal>
        </Box>
    )
}