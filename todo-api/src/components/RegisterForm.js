import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/registerUser";
import { useState } from "react";
import { Alert } from "@mui/material";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  if (success) {
    return <Alert severity="success">Register successful! You can now login.</Alert>;
  }

  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        if (formData.password !== formData.passwordRepeat) {
          setError("Password must match!");
          return;
        }
        try {
          setLoading(true);
          await registerUser({
            email: formData.email,
            password: formData.password,
          });
          setError(null);
          setSuccess(true);
        } catch (err) {
          setError("Failed to register user.");
        }
        setLoading(false);
      })}
    >
      <Box display="flex" flexDirection="column" gap={3}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField label="Email" {...register("email")} />
        <TextField type="password" label="Password" {...register("password")} />
        <TextField type="password" label="Password (repeat)" {...register("passwordRepeat")} />
        <Button variant="contained" type="submit">
          {loading ? "loading..." : "Register"}
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;