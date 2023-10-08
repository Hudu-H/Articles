import useStyles from "./styles";


const Post = () => {
  const classes = useStyles();
  
  return <h1 className={classes.post} >POST</h1>;
};

export default Post;
