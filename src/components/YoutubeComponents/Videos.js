import React from "react";
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material";
import Spinner from "components/Utils/Spinner";
import { VideoCard, ChannelCard } from "../YoutubeComponents";

const Videos = ({ isLoadingVideosList, videosData, direction }) => {
  console.log(isLoadingVideosList);
  console.log(videosData);
  return (
    <Stack
      direction={
        direction !== undefined
          ? { xs: "row", sm: "row", md: direction }
          : "row"
      }
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
    >
      {isLoadingVideosList && <Spinner />}
      {!isLoadingVideosList &&
        videosData?.map((el, idx) => (
          <Box key={idx}>
            {el.id.channelId && <ChannelCard channelDetail={el} />}
            {el.id.videoId && <VideoCard video={el} />}
          </Box>
        ))}
    </Stack>
  );
};

Videos.propTypes = {
  isLoadingVideosList: PropTypes.bool,
  videosData: PropTypes.array,
  direction: PropTypes.string,
};

export default Videos;
