import React, { useState } from "react";
import { Paper, ThemeProvider } from "@material-ui/core";
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import NavPage from "./components/navigation";
import routes from "./config/routes";
import { isMobile } from "react-device-detect";
import { Typography } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  const [darkMode, setDartMode] = useState(true);
  const theme = createTheme({
    palette: {
      primary: { main: darkMode ? "#0f85a3" : "#04b542" },
      type: darkMode ? "dark" : "light",
    },
  });

  const handletoggleTheme = () => {
    setDartMode(!darkMode);
  };

  const paperStyle = {
    backgroundColor: theme.palette.type === "dark" ? "#073642" : "light",
    // width: "100%",
    // flx: 1,
    // minHeight: "100vh",
    // position: "absolute" as "absolute",
  };
  if (isMobile) {
    return (
      <ThemeProvider theme={theme}>
        <Paper style={{ marginTop: 20 }}>
          <Typography>
            {" "}
            This content of this website is available only on Desktop
          </Typography>
        </Paper>
      </ThemeProvider>
    );
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Paper style={paperStyle}>
          <NavPage
            homeThem={theme.palette.type}
            handletoggleTheme={() => handletoggleTheme()}
          >
            <Switch>
              {/* <Route exact path="/" component={HomePage} /> */}
              {routes.map((route, index) => {
                if (route.auth) {
                }
                return (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    render={(routeProps: RouteComponentProps) => (
                      <route.component {...routeProps} />
                    )}
                  />
                );
              })}
            </Switch>
          </NavPage>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default Application;
