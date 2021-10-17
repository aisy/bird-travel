import { Card, CardHeader, CardMedia, CardContent, CardActionArea, Typography, Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';

const CardTour = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }}>R</Avatar>
          }
          title={"Malang"}
          subheader={"Kebun Binatang Ragunan"}
        />
        <CardMedia
          component={"img"}
          height={190}
          width={200}
          image={"https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
          alt={"Joker"}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardTour;