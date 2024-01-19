import { Button } from "@mui/material";
import { Box } from "@mui/material";

export const AddNewTodo = ({ onOpen }) => {
  return (
    <Box marginBottom={4}>
      <Button variant="contained" onClick={onOpen}>
        Add new Todo
      </Button>
    </Box>
  );
};
