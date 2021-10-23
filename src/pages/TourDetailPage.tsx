import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import DefaultLayout from "../layout/DefaultLayout";

import { getListDayTour } from '../services/servicesTour';
import DetailTour from "../components/DetailTour";
import DetailTourTab from "../components/DetailTourTab";

const TourDetailPage = (props: any) => {
  const dataTourDetail = props.location.state || {};
  // const dataDayTour = getListDayTour();

  return (
    <DefaultLayout>
      <Box>
        <Box sx={{ height: 250, backgroundColor: blue[900] }} />
        <Container>
          <DetailTour
            image={dataTourDetail.image}
            tourTitle={dataTourDetail.title}
          />

          <DetailTourTab
            activityTour={getListDayTour()}
          />
        </Container>
      </Box>
    </DefaultLayout>
  );
}

export default TourDetailPage;