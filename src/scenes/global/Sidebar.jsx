import { useState } from "react";
import {
  Sidebar as ProSidebar,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      component={<Link to={to} />}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          height: "100vh",
        },
        "& .ps-menu-root": {
          paddingTop: "20px",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menu-button.ps-active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={collapsed}>
        <Menu>
          {/* LOGO E ÍCONES */}
          <MenuItem
            style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
            }}
            onClick={() => setCollapsed(!collapsed)}
            icon={<MenuOutlinedIcon />}
          >
            {!collapsed && (
              <Typography
                variant="h6"
                color={colors.grey[100]}
                sx={{ ml: "10px" }}
              >
                ADMINISTRADOR
              </Typography>
            )}
          </MenuItem>

          {/* INFORMAÇÃO DO USUÁRIO */}
          {!collapsed && (
            <Box mb="25px" textAlign="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src="/assets/user.png"
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
              />
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mt: "10px" }}
              >
                Francisco Gemaque
              </Typography>
              <Typography variant="h6" color={colors.greenAccent[500]}>
                VP Gemaque Admin
              </Typography>
            </Box>
          )}

          {/* MENU */}
          <Item
            title="Painel de Controle"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Dados
          </Typography>

          <Item
            title="Equipe"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Informação de Contatos"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Faturas"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Páginas
          </Typography>

          <Item
            title="Formulário de Perfil"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Calendário"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Perguntas Frequentes"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Gráficos
          </Typography>

          <Item
            title="Gráfico de Barras"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Gráfico de Pizza"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Gráfico de Linhas"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Gráfico Geográfico"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
