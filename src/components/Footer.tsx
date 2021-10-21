import { Box } from "@mui/system";
import { grey } from '@mui/material/colors'
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{
      backgroundColor: grey[800],
      color: grey[50],
      bottom: 0,
      position: 'absolute',
      height: 70,
      width: '100%'
    }}
    >
      <Container sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
      }}
      >
        <p>
          © 2021 Nyagenta Softwork
        </p>
      </Container>
    </Box>
  );
}

export default Footer;