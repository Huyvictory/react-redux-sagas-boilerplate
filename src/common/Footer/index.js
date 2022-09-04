import React from "react";
import "./index.scss";
import { Typography } from "@mui/material";

const Footer = (props) => (
  <div className="app-footer">
    <Typography variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
      Practice MUI with Youtube Clone
    </Typography>
  </div>
);

export default Footer;
