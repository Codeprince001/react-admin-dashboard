import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";


const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="10px" mt="10px">
      <Typography fontSize="32px" color={colors.grey[100]} fontWeight="500" >{title}</Typography>
      <Typography color={colors.greenAccent[400]} >{subtitle}</Typography>
    </Box>
  );
};

export default Header;