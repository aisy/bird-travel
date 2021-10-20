import { Container } from "@mui/material";
import { Box } from "@mui/system";
import DefaultLayout from "../layout/DefaultLayout";

const TourDetailPage = (props: any) => {
  const dataTourDetail = props.location.state || {};
  // let { id } = useParams;

  return (
    <DefaultLayout>
      <Box>
        <Container>
          {dataTourDetail.title}
        </Container>
      </Box>
    </DefaultLayout>
  );
}

export default TourDetailPage;