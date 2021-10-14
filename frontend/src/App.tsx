import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: { main: "#1871E8" },
          secondary: { main: "#4D81B7" },
        },
      })}
    >
      <Router>
        <Header title="SHOPPING LIST" />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
