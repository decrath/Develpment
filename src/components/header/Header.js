import React, { Component } from "react";
import { Typography, Toolbar, Button } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <div>
        <Toolbar color="Primary">
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
                  I don't remember tthis part
              </Typography>
          </Button>
        </Toolbar>
      </div>
    );
  }
}

export default Header;
