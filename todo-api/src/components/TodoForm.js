import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { postTodo } from "../services/postTodo";
import { useForm } from "react-hook-form";
import { updateTodo } from "../services/updateTodo"

export const TodoForm = ({ onClose, editData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: editData || {
      title: "",
      description: "",
      completed: false,
    }
  });

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4">
        {editData ? "Edit Todo" : "Add new Todo"}
      </Typography>
      <form
        onSubmit={handleSubmit(async (data) => {
          if (editData) {
            await updateTodo(data)
          } else {
            await postTodo(data);
          }
          onClose?.();
        })}>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField
            required
            {...register("title")}
            label="Title"
            fullWidth
          />

          <TextField
            required
            {...register("description")}
            label="Description"
            fullWidth
          />
          <Button variant="contained" type="submit">
            {editData ? "Edit Todo" : "Add new Todo"}
          </Button>
        </Box>
      </form>
    </Box >
  );
};
