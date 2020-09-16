import React, { Component } from "react";
import './Header.css';
import { Typography, Toolbar, Button } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <div>
        <Toolbar className="color-of-header">
          <Button>
            <Typography>Home</Typography>
          </Button>
          <Button>
              <Typography>
                  Positions
              </Typography>
          </Button>
          <Button>
              <Typography>
                  Users
              </Typography>
          </Button>
        </Toolbar>
      </div>
    );
  }
}

export default Header;
