import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import { Fab } from "@mui/material";

import Orders from "./Orders";
import ChartTwo from "./ChartTwo";
import ChartThree from "./ChartThree";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import AddQuiz from "./AddQuiz";
import AddQuestion from "./AddQuestion";
import StudyMaterial from "../Student/StudyMaterial";
import { ResponsiveContainer } from "recharts";
import Notice from "./Notice";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  var date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  var time = new Date().toLocaleTimeString();
  var [ctime, setCtime] = React.useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  // setInterval(UpdateTime, 1000);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const location = useLocation();

  let user = sessionStorage.getItem("user");
  let id;
  React.useEffect(() => {
    if (user === "null" || user === null || user === undefined) {
      toast.error("Login First!!");
      navigate("/");
    }
  }, []);

  if (user !== "null" && user !== null && user !== undefined) {
    user = JSON.parse(sessionStorage.getItem("user"));
    console.log(user);
    id = user.portalId;
  }

  return (
    <>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "4px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <img
                src="https://ci4.googleusercontent.com/proxy/mta1h-3IY-hDdJj9bN6Xxr94NMwPShHjLGCpVtITeh4FONiEryzXYSNYP_LzrMwHQ3_cb2nMIgqmiU5CP19fa1Sy2j0KZMxl0M0waLHaKN98tADGF1qfHtzGANmMCpK0XTl3WFf0yhABxLFC4cg4CeU=s0-d-e1-ft#https://i.ibb.co/Z6qL3Qk/130835957-4769194336484775-8630394154285450578-n-removebg-preview.png"
                alt="Kitten"
                height="65"
                width="45"
              />
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 5 }}
              >
                Faculty Dashboard
              </Typography>
              <img
                src="https://ci4.googleusercontent.com/proxy/mta1h-3IY-hDdJj9bN6Xxr94NMwPShHjLGCpVtITeh4FONiEryzXYSNYP_LzrMwHQ3_cb2nMIgqmiU5CP19fa1Sy2j0KZMxl0M0waLHaKN98tADGF1qfHtzGANmMCpK0XTl3WFf0yhABxLFC4cg4CeU=s0-d-e1-ft#https://i.ibb.co/Z6qL3Qk/130835957-4769194336484775-8630394154285450578-n-removebg-preview.png"
                alt="Kitten"
                height="65"
                width="45"
              />
            </Toolbar>
          </AppBar>

          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
              {mainListItems}
              <Divider sx={{ my: 1 }} />
              {secondaryListItems}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid>
                {location.pathname == "/Faculty" ? (
                  <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 240,
                        }}
                      >
                        <Chart />
                      </Paper>
                    </Grid>
                    {/* Chart 2 */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 240,
                        }}
                      >
                        <ChartTwo />
                      </Paper>
                    </Grid>
                    {/* Chart 3 */}
                    <Grid item xs={12} md={4} lg={3}>
                      <Paper
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "column",
                          height: 240,
                        }}
                      >
                        <ChartThree />
                      </Paper>
                    </Grid>

                    {/* Recent Orders */}
                  </Grid>
                ) : location.pathname == "/Faculty/CreateQuiz" ? (
                  <AddQuiz />
                ) : location.pathname == "/Faculty/AddQuestion" ? (
                  <div className="d-flex text-center">
                    <ResponsiveContainer>
                      <AddQuestion />
                    </ResponsiveContainer>
                  </div>
                ) : location.pathname == "/Faculty/UploadNotes" ? (
                  <StudyMaterial />
                ) : location.pathname == "/Faculty/Notice" ? (
                  <Notice />
                ) : (
                  navigate("/Faculty")
                )}
              </Grid>

              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
          <Toaster position="top-center" reverseOrder={false} />
        </Box>
      </ThemeProvider>
    </>
  );

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://www.cdac.in/">
          CDAC Portal
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
}

export default function Dashboard() {
  return <DashboardContent />;
}
