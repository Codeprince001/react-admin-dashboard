import { useState } from "react";
import { Sidebar, Menu, MenuItem, menuClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";


import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import CloseIcon from '@mui/icons-material/Close';
import userImg from "../../assets/user1.jpg";




const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    ><Link to={to} >
        <Typography fontSize="1rem">{title}</Typography>
      </Link>
    </MenuItem>
  );
};


export const HorizontalNav = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setisCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Sidebar
      collapsed={isCollapsed}
      width="300px"
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: "10px",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        ["." + menuClasses.button]: {
          backgroundColor: "transparent !important",
          "&:hover": {
            backgroundColor: "transparent !important",
            ['.' + menuClasses.label]: {
              color: `${colors.blueAccent[500]} !important`,
            },
            ['.' + menuClasses.icon]: {
              color: `${colors.blueAccent[500]}`,
            },
          },
          "&:active": {
            color: `${colors.greenAccent[500]}`
          }
        }
      }}
    >

      <Menu iconShape="square">
        <MenuItem
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          onClick={() => setisCollapsed(!isCollapsed)}
          style={{ margin: "5px 0 10px 0", color: colors.grey[100] }}>
          {!isCollapsed && (
            <Box display="flex" justifyContent="space-between"
              alignItems="center" >
              <Typography variant="h5" color={colors.grey[100]} margin="0 auto">ADMINS</Typography>
              <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                <CloseIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box mb="10px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="User-profile"
                width="100px"
                height="100px"
                src={userImg}
                style={{ cursor: "pointer", borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </Box>

            <Box textAlign="center">
              <Typography fontSize="16px" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>Wisdom Matthew</Typography>
            </Box>
          </Box>
        )}

        <Menu paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "5px 0" }}
            textAlign="center"
            fontSize="14px"
          >
            Data
          </Typography>
          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Contacts Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="invoices and Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "5px 0" }}
            textAlign="center"
            fontSize="14px"
          >
            Pages
          </Typography>
          <Item
            title="Profile form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="FAQ"
            to="/"
            icon={<HelpOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "5px 0" }}
            textAlign="center"
            fontSize="14px"
          >
            Charts
          </Typography>
          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line Chart"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>

      </Menu>

    </Sidebar >

  );
};
