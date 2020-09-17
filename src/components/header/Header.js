import React, { Component } from "react";
import { Typography, Toolbar, Button } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <div>
        <Toolbar>
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
