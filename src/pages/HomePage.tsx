import { Box, Container } from '@mui/material';
import CarouselHome from '../components/CarouselHome';
import Navbar from '../components/Navbar';
import { ScrollTopButton, InitTopPosition } from '../components/ScrollTop';

const HomePage = (props: any) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <InitTopPosition />
        <Container>
          <Box sx={{ my: 2 }}>
            <CarouselHome />
            {[...new Array(50)].map(() =>
              `Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            `,
            ).join('\n')}
          </Box>
        </Container>
        <ScrollTopButton {...props} />
      </Box>
    </div>
  );
}

export default HomePage;