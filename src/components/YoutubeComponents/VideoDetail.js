import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideo, getListVideos } from "actions/Auth";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "../YoutubeComponents";

const VideoDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const VideosData = useSelector((state) => state.videos);

  const { snippet, statistics } = VideosData?.videoById || {};

  useEffect(() => {
    dispatch(getVideo(`videos?part=snippet,statistics&id=${id}`));
    dispatch(
      getListVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    );
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px" }}>
            <ReactPlayer
              className={"react-player"}
              controls
              url={`https://www.youtube.com/watch?v=${id}`}
            />
            <Typography color={"#fff"} variant={"h5"} fontWeight={"bold"} p={2}>
              {snippet?.title || "Just some title"}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${snippet?.channelId}` || "#"}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color={"#fff"}
                >
                  {snippet?.channelTitle || `Loading...`}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction={"row"} gap="20px" alignItems={"center"}>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems={"center"}
        >
          <Videos
            direction="column"
            isLoadingVideosList={VideosData.getListVideoLoading}
            videosData={VideosData.videos}
          ></Videos>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
