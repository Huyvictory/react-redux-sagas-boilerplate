import { React, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../YoutubeComponents";
import { getListVideos } from "actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const dispatch = useDispatch();
  const videosData = useSelector((state) => state.videos);

  const { searchKeyword } = useParams();

  console.log(searchKeyword);

  useEffect(() => {
    dispatch(getListVideos(`search?part=snippet&q=${searchKeyword}`));
  }, [searchKeyword]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        mb={2}
        sx={{ color: "white" }}
      >
        Search Results for:{" "}
        <span style={{ color: "#F31503" }}>{searchKeyword}</span>
      </Typography>
      <Videos
        isLoadingVideosList={videosData.getListVideoLoading}
        videosData={videosData.videos}
      ></Videos>
    </Box>
  );
};

export default SearchFeed;
