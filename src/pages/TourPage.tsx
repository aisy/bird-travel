import { Container, Grid, Paper, Box, IconButton, InputBase, Card } from "@mui/material";
import DefaultLayout from "../layout/DefaultLayout";
import SearchIcon from "@mui/icons-material/Search";
import ListCardTour from "../components/ListCardTour";

import { getListTour } from '../services/servicesTour';

const TourPage = () => {

  return (
    <DefaultLayout>
      <Container>
        <div style={{ marginTop: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Card sx={{ padding: 2 }}>
                <Box sx={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: 5 }}>
                  <Paper
                    component={"form"}
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                  >
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Lakukan Pencarian..."
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  </Paper>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={9}>
              <ListCardTour
                data={getListTour()}
              />
            </Grid>
          </Grid>
          <Box sx={{ marginBottom: 2 }} />
        </div>
      </Container>
    </DefaultLayout >
  );
}

export default TourPage;