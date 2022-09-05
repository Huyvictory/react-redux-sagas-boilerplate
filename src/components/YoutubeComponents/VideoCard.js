import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  //   demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "constants/icons";
import { countDueDay } from "utils/countDueDay";

const VideoCard = ({ video }) => {
  const { id, snippet } = video;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link
        to={
          id.videoId
            ? `/video/${id.videoId}/${snippet?.channelId}`
            : demoVideoUrl
        }
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={
            id.videoId
              ? `/video/${id.videoId}/${snippet?.channelId}`
              : demoVideoUrl
          }
        >
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#FFF"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color={"gray"}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
            <Typography ml={"5px"} variant="subtitle3">
              - {Math.abs(countDueDay(snippet?.publishedAt))} days
            </Typography>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
};

export default VideoCard;
