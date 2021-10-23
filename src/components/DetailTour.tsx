import { Box } from "@mui/system";
import { Typography, Grid, Stack, Divider, Paper } from '@mui/material';
import { orange } from "@mui/material/colors";
import CalendarIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import rupiahConversion from '../helpers/RupiahConversion';

interface PropsDetail {
  image?: string,
  tourTitle?: string,
  tourSubtitle?: string,
  dateStart?: string,
  dateEnd?: string,
  leader?: string,
  price?: number,
}

const DetailTour = ({ image, tourTitle, tourSubtitle, dateStart, dateEnd, leader, price }: PropsDetail) => {

  return (
    <Paper elevation={4} sx={{ marginTop: '-60px', marginBottom: 4, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img
            src={image ? image : "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
            alt={tourTitle}
            width={"100%"}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant={"h4"}
            sx={{ fontWeight: 700 }}
          >
            {tourTitle ? tourTitle : "Tour Title"}
          </Typography>
          <Typography variant={"subtitle1"} color={"text.secondary"}>
            {tourSubtitle ? tourSubtitle : "Malang selatan Danau Toba"}
          </Typography>
          <Box height={15} />
          <Stack direction={"row"} spacing={2}>
            <CalendarIcon />
            <Typography> {dateStart ? dateStart : '9 Januari 2022'} </Typography>
            <span>-</span>
            <Typography> {dateEnd ? dateEnd : '16 Januari 2022'} </Typography>
          </Stack>
          <Box height={10} />
          <Stack direction={"row"} spacing={2}>
            <PersonIcon />
            <Typography>
              {leader ? leader : 'Wilbur Goh and Sudheesh'}
            </Typography>
          </Stack>
          <Box height={10} />
          <Divider />
          <Box height={10} />
          <Typography variant={'h5'} sx={{ color: orange[800], fontWeight: 700 }}>
            {price ? rupiahConversion(price) : rupiahConversion(5000000)}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DetailTour;