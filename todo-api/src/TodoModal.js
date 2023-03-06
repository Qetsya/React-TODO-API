import { Modal } from "@mui/material";
import { Box } from "@mui/material";

const styles = {
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
}

export const TodoModal = ({ open, onClose, children }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={styles}>
                {children}
            </Box>
        </Modal>
    );
};
