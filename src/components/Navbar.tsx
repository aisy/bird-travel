import { AppBar, Toolbar, Typography, Link, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ paddingLeft: 30, paddingRight: 30 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Kunam Tours
        </Typography>
        <nav>
          <Link
            // variant="button"
            underline="none"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Tour
          </Link>
          <Link
            // variant="button"
            underline="none"
            color="inherit"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Report
          </Link>
          <Link
            // variant="button"
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