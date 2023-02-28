
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

export const AddNewTodo = ({children, onOpen, onClose, isOpen}) => {

    return (
        <Box marginBottom={4}>
            <Button variant="contained" onClick={onOpen}>
                Add new Todo
            </Button>

            <Modal open={isOpen} onClose={onClose}>
                <Box sx={style}>{children}</Box>
            </Modal>
        </Box>
    )
}