import CarouselHome from '../components/CarouselHome';
import DefaultLayout from '../layout/DefaultLayout';

const HomePage = () => {
  return (
    <>
      <DefaultLayout>
        <CarouselHome />
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