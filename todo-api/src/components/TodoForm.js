import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button, Alert } from "@mui/material";
import { postTodo } from "../services/postTodo";
import { useForm } from "react-hook-form";
import { updateTodo } from "../services/updateTodo";
import { useState } from "react";

export const TodoForm = ({ onClose, editData }) => {
  const [error, setError] = useState();
  const { register, handleSubmit } = useForm({
    defaultValues: editData || {
      title: "",
      description: "",
      completed: false,
    },
  });

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography variant="h4">
        {editData ? "Edit Todo" : "Add new Todo"}
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            if (editData) {
              await updateTodo(data);
            } else {
              await postTodo(data);
            }
            onClose?.();
          } catch (error) {
            setError("Could not load Todo list. Please reload the page");
          }
       
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField required {...register("title")} label="Title" fullWidth />

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
    </Box>
  );
};
