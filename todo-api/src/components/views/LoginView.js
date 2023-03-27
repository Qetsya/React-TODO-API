import { Heading } from "../Heading";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import RegisterForm from "../RegisterForm"
import { loginUser } from "../../services/loginUser";
import {Alert} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";



const LoginView = ({onLogin}) => {
  const {register, handleSubmit} = useForm();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <>
      <Heading title="Login or Register" />
      <form
      onSubmit={handleSubmit(async (data) => {
        setLoading(true)
        try {
          const res = await loginUser(data);
          onLogin(res.token)
          setError(null);
          console.log(res)
        } catch (err) {
          setError("Failed to login")
        }
        setLoading(true)
      })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
        {error && <Alert severity="error">{error}</Alert>}
          <TextField label="Email" {...register("email")}/>
          <TextField type="password" label="Password" {...register("password")}/>
          <Button variant="contained" type="submit">
          {loading ? "loading..." : "Login"}
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 6 }} />
      <RegisterForm/>
    </>
  );
};

export default LoginView;
