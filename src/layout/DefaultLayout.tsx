import { ReactNode } from 'react';
import ButtonBackTop from '../components/common/ButtonBackTop';
import Navbar from '../components/Navbar';

interface Props {
  children: ReactNode
}

const DefaultLayout = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <div>
        <Navbar />
        <div>
          {children}
        </div>
        <ButtonBackTop />
      </div>
    </div>
  );
}

export default DefaultLayout;