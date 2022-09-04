import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Input } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchKeyword, setsearchKeyword] = useState("");

  const navigate = useNavigate();
  return (
    <Paper
      component={"form"}
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${searchKeyword}`);

        setsearchKeyword("");
      }}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        p: "1",
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <Input
        style={{ marginLeft: "10px" }}
        className="search-bar"
        placeholder="Enter keywords for searching videos..."
        value={searchKeyword}
        onChange={(e) => {
          setsearchKeyword(e.target.value);
        }}
      ></Input>
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search></Search>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
