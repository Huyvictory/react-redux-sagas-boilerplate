import React, { useEffect, useState } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideo,
  getListVideos,
  getListComments,
  getChannelDetail,
} from "actions/Auth";
import { CheckCircle } from "@mui/icons-material";
import { Comments, Videos } from "../YoutubeComponents";
import { demoProfilePicture } from "constants/icons";
import { nFormatter } from "utils/formatNumber";
import ReactShowMoreText from "react-show-more-text";

const VideoDetail = () => {
  const [showMore, setshowMore] = useState(false);

  const dispatch = useDispatch();
  const { id, idChannel } = useParams();

  const VideosData = useSelector((state) => state.videos);
  const commentsVideo = useSelector((state) => state.comments);
  const channelDetail = useSelector((state) => state.channel);

  const { snippet, statistics } = VideosData?.videoById || {};

  useEffect(() => {
    dispatch(getVideo(`videos?part=snippet,statistics&id=${id}`));
    dispatch(
      getListVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    );
    dispatch(getListComments(`commentThreads?part=snippet&videoId=${id}`));
    dispatch(getChannelDetail(`channels?part=snippet&id=${idChannel}`));
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
                <Box display={"flex"}>
                  <Avatar
                    src={
                      Object.keys(channelDetail?.channel).length !== 0
                        ? `${channelDetail?.channel.items[0].snippet.thumbnails.high.url}`
                        : demoProfilePicture
                    }
                  />
                  <Stack
                    direction={"column"}
                    marginLeft={"15px"}
                    color={"#fff"}
                  >
                    <Typography
                      variant={{ sm: "subtitle1", md: "h6" }}
                      color={"#fff"}
                      align={"justify"}
                    >
                      {snippet?.channelTitle || `Loading...`}
                      <CheckCircle
                        sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                      />
                    </Typography>
                    <Typography variant="subtitle2" color={"#aaa"}>
                      {Object.keys(channelDetail?.channel).length !== 0
                        ? `${nFormatter(
                            channelDetail?.channel.items[0].statistics
                              .subscriberCount
                          )} subscribers`
                        : "Loading..."}
                    </Typography>
                  </Stack>
                </Box>
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
            <Box>
              <Typography
                px={1}
                py={2}
                align="justify"
                color={"#fff"}
                variant="body1"
              >
                <ReactShowMoreText
                  lines={2}
                  className="show_more_text"
                  keepNewLines={true}
                  more={"Show More"}
                  less={"Show Less"}
                  onClick={() => {
                    setshowMore(!showMore);
                  }}
                >
                  {snippet?.description || "Loading"}
                </ReactShowMoreText>
              </Typography>
            </Box>
          </Box>

          <Box>
            <Comments
              showMore={showMore}
              setshowMore={setshowMore}
              commentsList={commentsVideo}
            />
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
