import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { grey } from '@mui/material/colors';
// import MenuIcon from '@mui/icons-material/Menu';

interface LinkTabProps {
  label?: string,
  hreft?: string
}

const Navbar = () => {

  return (
    <AppBar
      // color={'transparent'}
      position="fixed"
      sx={{ paddingLeft: 10, paddingRight: 10, backgroundColor: 'transparent' }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            underline={"none"}
            color={"inherit"}
            href={'/'}
          >
            Kunam Tours
          </Link>
        </Typography>
        <nav>
          <Link
            // component="button"
            variant="body1"
            underline="none"
            color="inherit"
            href="/tour"
            sx={{ my: 1, mx: 1.5 }}
          >
            Tour
          </Link>
          <Link
            variant="body1"
            underline="none"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Report
          </Link>
          <Link
            variant="body1"
            underline="none"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Booking
          </Link>
          <Link
            // variant="button"
            underline="none"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Kontak Kami
          </Link>
        </nav>

      </Toolbar>
    </AppBar>
  );
}

export default Navbar;