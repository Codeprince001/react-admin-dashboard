import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam, mockDataToken } from "../../data/mockdata";
import AdminPanelSettingOulineIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/Header";

export const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", HeaderName: "ID" },
    { field: "name", HeaderName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "age", HeaderName: "age", type: "number", headerAlign: "left", align: "left" },
    { field: "phone", HeaderName: "Phone Number", flex: 1 },
    { field: "email", HeaderName: "Email", flex: 1 },
    {
      field: "access", HeaderName: "Access Level", flex: 1, renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            p="10px 15px"
            borderRadius="10px"
            display="flex"

            backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}>
            {access === "admin" && <AdminPanelSettingOulineIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      }
    },
  ];
  return (

    <Box m="20px">
      <Header title="TEAM" subtitle="Managing team Members" />
      <Box m="5px 0 0 0 " height="70vh">
        <DataGrid
          rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};
