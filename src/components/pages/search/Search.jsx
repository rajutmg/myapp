import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider } from "@material-ui/styles";
import { Button, createMuiTheme } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const [type, setType] = useState(0);
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{ display: "flex", margin: "15px 0" }}>
          <TextField className="searchBox" label="Search" variant="filled" />
          <Button varient="contained" style={{ marginLeft: 10 }}>
            <SearchIcon />
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Search;
