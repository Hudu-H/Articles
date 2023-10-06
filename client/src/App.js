import { Container, AppBar, Typography } from "@mui/material";
import scenic from './images/scenic.png';
const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Scenic_Places</Typography>
        <img  src={scenic} alt="scenic_places" height="60" width={40}/>
      </AppBar>
    </Container>
  );
};

export default App;