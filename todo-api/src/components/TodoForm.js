import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { postTodo } from "../services/postTodo";

export const TodoForm = ({ onSubmit, onClose }) => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4">Add new Todo</Typography>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const todo = {
            completed: false,
          };

          for (let [name, value] of formData.entries()) {
            todo[name] = value;
          }

          await postTodo(todo);
          onSubmit?.();
          onClose?.();
        }}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            required
            id="todo-title"
            name="title"
            label="Title"
            fullWidth
          />

          <TextField
            required
            id="todo-description"
            name="description"
            label="Description"
            fullWidth
          />
          <Button variant="contained" type="submit">
            Add Todo
          </Button>
        </Box>
      </form>
    </Box>
  );
};
