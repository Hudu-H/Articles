import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

//internal styles
import useStyles from "./styles";

const CommentSection = ({ post }) => {
  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState("");
  console.log(post);

  const handleClick = () => {};

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.InnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((comment, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              Comment {i}
            </Typography>
          ))}
        </div>
        <div style={{ width: "70%" }}>
          <Typography gutterBottom variant="h6">
            Write your comments
          </Typography>
          <TextField
            value={comment}
            fullWidth
            minRows={4}
            variant="outlined"
            label="Comment"
            multiline
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "10px" }}
            disabled={!comment}
            fullWidth
            variant="contained"
            onClick={handleClick}
          >
            Comment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
