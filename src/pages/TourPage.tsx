import { Container, Grid } from "@mui/material";
import CardTour from "../components/CardTour";
import DefaultLayout from "../layout/DefaultLayout";

const TourPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <CardTour />
          </Grid>
          <Grid item xs={3}>
            <CardTour />
          </Grid>
          <Grid item xs={3}>
            <CardTour />
          </Grid>
          <Grid item xs={3}>
            <CardTour />
          </Grid>
        </Grid>
      </Container>
    </DefaultLayout>
  );
}

export default TourPage;