import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useAppContext } from "src/context";
import { Paths } from "src/routes";

const drawerWidth = 240;

export const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isAuthorized } = useAppContext();

  useEffect(() => {
    if (!isAuthorized) {
      navigate(Paths.HOME);
    }
  }, [navigate, isAuthorized]);

  const sidebarItems = [
    {
      text: "Home",
      Icon: HomeIcon,
      route: Paths.HOME,
      disabled: false,
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <Toolbar />
      <Box overflow="auto">
        <List>
          {sidebarItems.map(({ text, Icon, route, disabled }) => (
            <Tooltip
              title=""
              placement="right"
              key={text}
              arrow={true}
            >
              <ListItem disablePadding={true}>
                <ListItemButton
                  disabled={disabled}
                  onClick={() => navigate(route)}
                >
                  <ListItemIcon>
                    <Icon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
