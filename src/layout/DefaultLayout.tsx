import { ReactNode } from 'react';
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
      </div>
    </div>
  );
}

export default DefaultLayout;