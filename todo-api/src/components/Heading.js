import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Heading = ({ title }) => {
  return (
    <Box paddingTop={4}>
      <Typography align="center" variant="h3" gutterBottom>
        {title}
      </Typography>
    </Box>
  );
};
