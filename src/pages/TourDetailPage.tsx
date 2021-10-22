import { Paper, Container, Grid, Stack, Typography, Divider, Stepper, Step, StepLabel, StepContent, Accordion, AccordionSummary } from "@mui/material";
import { Box } from "@mui/system";
import CalendarIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import DefaultLayout from "../layout/DefaultLayout";
import { getListDayTour } from '../services/servicesTour';
import { blue, orange } from "@mui/material/colors";

const TourDetailPage = (props: any) => {
  const dataTourDetail = props.location.state || {};
  const dataDayTour = getListDayTour();

  return (
    <DefaultLayout>
      <Box>
        <Box sx={{ height: 250, backgroundColor: blue[900] }} />
        <Container>
          <Paper elevation={4} sx={{ marginTop: '-60px', marginBottom: 4, padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  src={dataTourDetail.image}
                  alt={dataTourDetail.title}
                  width={"100%"}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant={"h4"}
                  sx={{ fontWeight: 700 }}
                >
                  {dataTourDetail.title}
                </Typography>
                <Typography variant={"subtitle1"} color={"text.secondary"}>
                  Malang selatan Danau Toba
                </Typography>
                <Box height={15} />
                <Stack direction={"row"} spacing={2}>
                  <CalendarIcon />
                  <Typography>9 Januari 2022</Typography>
                  <span>-</span>
                  <Typography>22 Januari 2022</Typography>
                </Stack>
                <Box height={10} />
                <Stack direction={"row"} spacing={2}>
                  <PersonIcon />
                  <Typography>
                    Wilbur Goh and Sudheesh
                  </Typography>
                </Stack>
                <Box height={10} />
                <Divider />
                <Box height={10} />
                {/* <Stack direction={"row"} spacing={2}>
                  <PersonIcon />
                  <Typography>
                    Wilbur Goh and Sudheesh
                  </Typography>
                </Stack> */}
                <Typography variant={'h5'} sx={{ color: orange[800], fontWeight: 700 }}>
                  Rp. 5.000.000
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={4} sx={{ marginBottom: 4, padding: 2 }}>
            <Typography
              variant={'h5'}
              component={'div'}
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Kegiatan Tour
            </Typography>
            <Box>
              {dataDayTour.map((item: any, key: any) => {
                return (
                  <Accordion>
                    <AccordionSummary>
                      <Typography>{key}</Typography>
                    </AccordionSummary>
                  </Accordion>
                );
              })}
            </Box>
          </Paper>
        </Container>
      </Box>
    </DefaultLayout>
  );
}

export default TourDetailPage;