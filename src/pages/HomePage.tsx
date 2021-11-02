// import CarouselHome from '../components/CarouselHome';
import { Grid } from '@mui/material';
import DefaultLayout from '../layout/DefaultLayout';

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        {/* <CarouselHome /> */}
        {/* <div style={{ height: '100vh', backgroundColor: 'blue', padding: '0 80px' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h1>Tour</h1>
              <h3>asdasd</h3>
            </Grid>
            <Grid item xs={6}>

            </Grid>
          </Grid>
        </div> */}
        <div style={{ marginInline: 60 }}>
          {[...new Array(50)].map(() =>
            `Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            `,
          ).join('\n')}
        </div>
      </DefaultLayout>
    </>
  );
}

export default HomePage;