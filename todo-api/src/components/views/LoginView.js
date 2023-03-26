import { Heading } from "../Heading";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Divider } from "@mui/material";
import { useForm } from "react-hook-form";
import { registerUser } from "../../services/registerUser";

const LoginView = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Heading title="Login or Register" />
      <form>
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Email" />
          <TextField label="Password" />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 6 }} />
      <form
        onSubmit={handleSubmit((formData) => {
          console.log(formData);
          if (formData.password !== formData.passwordRepeat) {
            //show error
            console.log("error");

            return;
          }
          registerUser({
            email: formData.email,
            password: formData.password,
          });
        })}
      >
        <Box display="flex" flexDirection="column" gap={3}>
          <TextField label="Email" {...register("email")} />
          <TextField label="Password" {...register("password")} />
          <TextField label="Password (repeat)" {...register("passwordRepeat")} />
          <Button variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </form>
    </>
  );

};

export default LoginView;
