import React from "react";
import PropTypes from "prop-types";
import ReactShowMoreText from "react-show-more-text";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import "./style/Comments.scss";
import Spinner from "components/Utils/Spinner";
import { Link } from "react-router-dom";
import { countDueDay } from "utils/countDueDay";

const Comments = ({ commentsList, showMore, setshowMore }) => {
  return (
    <div style={{ overflowY: "scroll", maxHeight: "60vh" }}>
      <Stack direction={"column"}>
        {commentsList.getListCommentsLoading ? (
          <Spinner />
        ) : (
          commentsList?.comments.map((el, idx) => {
            console.log(el.snippet.topLevelComment.snippet.publishedAt);
            return (
              <Box key={idx} display={"flex"} py={1} px={2}>
                <Box width={{ xs: "15%", sm: "10%", lg: "5%" }}>
                  <Avatar
                    src={`${el.snippet.topLevelComment.snippet.authorProfileImageUrl}`}
                  />
                </Box>
                <Box width={"95%"}>
                  <Stack direction={"column"}>
                    <Stack direction={"row"} gap={1}>
                      <Typography
                        variant={{ sm: "subtitle1", md: "h5" }}
                        color={"white"}
                        className={"name_author"}
                        fontWeight={"bold"}
                      >
                        <Link
                          to={`/channel/${el.snippet.topLevelComment.snippet.authorChannelId.value}`}
                        >
                          {`${el.snippet.topLevelComment.snippet.authorDisplayName}`}
                        </Link>
                      </Typography>
                      <Typography
                        variant="subtitle3"
                        lineHeight={"unset"}
                        color={"#aaa"}
                      >
                        {Math.abs(
                          countDueDay(
                            el.snippet.topLevelComment.snippet.publishedAt
                          )
                        )}{" "}
                        days ago
                      </Typography>
                    </Stack>
                    <Typography
                      align="justify"
                      fontSize={15}
                      color={"#fff"}
                      sx={{ padding: "5px 0" }}
                    >
                      <ReactShowMoreText
                        lines={4}
                        className="show_more_text"
                        keepNewLines={true}
                        more={"Show More"}
                        less={"Show Less"}
                        onClick={() => {
                          setshowMore(!showMore);
                        }}
                      >
                        {el.snippet.topLevelComment.snippet.textDisplay}
                      </ReactShowMoreText>
                    </Typography>
                    <Stack direction={"row"} gap={2}>
                      <Typography>
                        <ThumbUp sx={{ fontSize: "16px", color: "gray" }} />
                      </Typography>
                      <Typography color={"#fff"} lineHeight={"unset"}>
                        {el.snippet.topLevelComment.snippet.likeCount}
                      </Typography>
                      <Typography>
                        <ThumbDown sx={{ fontSize: "16px", color: "gray" }} />
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            );
          })
        )}
      </Stack>
    </div>
  );
};

Comments.propTypes = {
  commentsList: PropTypes.array,
  showMore: PropTypes.bool,
  setshowMore: PropTypes.func,
};

export default Comments;
