import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material';

const CarouselHome = () => {
  let items = [
    {
      name: "Random Name 1",
      description: "Nani!?"
    },
    {
      name: "Random Name 2",
      description: "Nani!?"
    },
  ];

  return (
    <Carousel>
      {
        items.map((item, i) => {
          return (
            <div key={i}>
              <Paper>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <Button className="CheckButton">
                  Check it out!
                </Button>
              </Paper>
            </div>
          );
        })
      }
    </Carousel>
  );
}

export default CarouselHome;