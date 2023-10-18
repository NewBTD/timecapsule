import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const Nav = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid md={2}>
            <h1>Logo</h1>
          </Grid>
          <Grid md={8}>
            <h1>ส่งข้อความให้ตัวเองในอนาคตซิ</h1>
            <h3>พัฒนาโดย borntoDevTeam</h3>
          </Grid>
          <Grid md={2}>
            <h1>Logo</h1>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Nav;
