import { Card, CardMedia, CardContent, CardActionArea, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

interface CardTourProp {
  title?: string,
  image?: string,
  content?: string,
}

const CardTour = ({ title, image, content }: CardTourProp) => {

  const history = useHistory();

  const routeChange = (path: string) => {
    history.push({
      pathname: path,
      state: {
        title: title,
      }
    });
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={
          () => routeChange(`tour/${title}`)
        }
      >
        <CardMedia
          component={"img"}
          height={190}
          width={200}
          image={
            image ?
              image :
              "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
          alt={"Joker"}
        />
        <CardContent>
          <Typography variant={"h5"} component={"div"} sx={{ fontWeight: 600 }}>
            {title ? title : "Title"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content ? content : "Content"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}

export default CardTour;