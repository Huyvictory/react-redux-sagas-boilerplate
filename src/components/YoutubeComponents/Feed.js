import { React, useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "../YoutubeComponents";
import { getListVideos } from "actions/Auth";
import { useDispatch, useSelector } from "react-redux";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const dispatch = useDispatch();
  const videosData = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getListVideos(`search?part=snippet&q=${selectedCategory}`));
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        ></SideBar>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos
          isLoadingVideosList={videosData.getListVideoLoading}
          videosData={videosData.videos}
        ></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
