import React from "react";
import PropTypes from "prop-types";
import { Stack, Box } from "@mui/material";
import Spinner from "components/Utils/Spinner";
import { VideoCard, ChannelCard } from "../YoutubeComponents";

const Videos = ({ isLoadingVideosList, videosData, direction }) => {
  console.log(isLoadingVideosList);
  console.log(videosData);
  return (
    <div style={{ overflowY: "scroll", maxHeight: "150vh" }}>
      {isLoadingVideosList && <Spinner />}
      {!isLoadingVideosList && (
        <Stack
          direction={
            direction !== undefined
              ? { xs: "row", sm: "row", md: direction }
              : "row"
          }
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={2}
        >
          {!isLoadingVideosList &&
            videosData?.map((el, idx) => (
              <Box
                sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}
                key={idx}
              >
                {el.id.channelId && <ChannelCard channelDetail={el} />}
                {el.id.videoId && <VideoCard video={el} />}
              </Box>
            ))}
        </Stack>
      )}
    </div>
  );
};

Videos.propTypes = {
  isLoadingVideosList: PropTypes.bool,
  videosData: PropTypes.array,
  direction: PropTypes.string,
};

export default Videos;
