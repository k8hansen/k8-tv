import { Button, TextField, Typography } from "@mui/material";
import React from "react";

interface SearchBarProps {
  // Add any additional props if needed
}

const SearchBar: React.FC<SearchBarProps> = () => {
  const handleSearch = () => {
    console.log("Search!");
  };
  return (
    <main>
      <div style={{ margin: "2rem" }}>
        <Typography variant="h1">Kates Database of Television</Typography>
      </div>
      <div style={{ display: "flex", gap: "6rem" }}>
        <TextField
          id="outlined-basic"
          label="Search for a tv show or movie"
          variant="outlined"
          fullWidth
        />
        <Button size="large" variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </main>
  );
};

export default SearchBar;
