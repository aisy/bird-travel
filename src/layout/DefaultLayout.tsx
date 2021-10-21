import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { InitTopPosition, ScrollTopButton } from '../components/ScrollTop';

interface Props {
  children: ReactNode
}

const DefaultLayout = (props: Props) => {

  const { children } = props;
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <InitTopPosition />
        <div>
          {children}
        </div>
        <ScrollTopButton {...props} />
        <Footer />
      </Box>
    </div>
  );
}

export default DefaultLayout;