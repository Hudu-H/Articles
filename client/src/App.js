import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import scenic from "./images/scenic.png";
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Scenic_Places
        </Typography>
        <img src={scenic} alt="scenic_places" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              {/* <Posts /> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Form /> */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
