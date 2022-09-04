import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { interceptor } from "utils/interceptor";
import {
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "../../components/YoutubeComponents";
import { Box } from "@mui/material";
import Header from "common/Header";
import Body from "common/Layout";
import Footer from "common/Footer";

export default function App() {
  interceptor();
  return (
    <Fragment>
      <Box sx={{ backgroundColor: "#000" }}>
        <Header></Header>
        <Routes>
          <Route path="/" exact element={<Body />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchKeyword" element={<SearchFeed />} />
        </Routes>
        <Footer></Footer>
      </Box>
    </Fragment>
  );
}
