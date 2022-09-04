import React from "react";
import { Stack } from "@mui/material";
import PropTypes from "prop-types";
import { categories } from "constants/icons";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((el) => {
        return (
          <button
            key={el.name}
            className="category-btn"
            onClick={(e) => {
              e.preventDefault();
              setSelectedCategory(el.name);
            }}
            style={{
              background: el.name === selectedCategory && "#FC1503",
              color: "white",
            }}
          >
            <span
              style={{
                color: el.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {el.icon}
            </span>
            <span
              style={{ opacity: el.name === selectedCategory ? "1" : "0.8" }}
            >
              {el.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

Sidebar.propTypes = {
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

export default Sidebar;
