import { useSelector } from "react-redux";

//internal imports
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return (
    <>
      <h1 className={classes.h1}>POSTS</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;
