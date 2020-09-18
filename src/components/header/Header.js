import React, { Component } from "react";
import { Typography, Toolbar, Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/home/Home";
import Position from "../pages/position/Position";
import Users from "../pages/user/User";

class Header extends Component {
  render() {
    return (
      <div>
        <Router>
          <Toolbar>
            <Link to="/home">
              <Button>
                <Typography>Home</Typography>
              </Button>
            </Link>
            <Link to="/postion">
              <Button>
                <Typography>Positions</Typography>
              </Button>
            </Link>

            <Link to="/users">
              <Button>
                <Typography>Users</Typography>
              </Button>
            </Link>
          </Toolbar>
          <Route path="/home" component={Home}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/postion" component={Position}></Route>
        </Router>
      </div>
    );
  }
}

export default Header;
