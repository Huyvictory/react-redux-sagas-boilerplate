import { getChannelDetail, getListVideos } from "actions/Auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { demoThumbnailUrl } from "constants/icons";
import "./style/ChannelDetail.scss";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const channelDetail = useSelector((state) => state.channel);
  const channelVideos = useSelector((state) => state.videos);
  console.log(channelDetail);
  console.log(channelVideos);

  useEffect(() => {
    dispatch(getChannelDetail(`channels?part=snippet&id=${id}`));
    dispatch(getListVideos(`search?channelId=${id}&part=snippet&order=date`));
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box sx={{ textAlign: "center" }}>
        <img
          className="img_height"
          src={
            Object.keys(channelDetail.channel).length !== 0
              ? channelDetail?.channel?.items[0]?.brandingSettings?.image
                  ?.bannerExternalUrl
              : demoThumbnailUrl
          }
        />
        <ChannelCard
          disabledLink={true}
          marginTop={"-110px"}
          channelDetail={
            Object.keys(channelDetail.channel).length !== 0
              ? channelDetail?.channel?.items[0]
              : {}
          }
        />
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{ mr: { sm: "100px" } }}></Box>
        <Videos
          isLoadingVideosList={channelVideos.getListVideoLoading}
          videosData={channelVideos.videos}
        />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
