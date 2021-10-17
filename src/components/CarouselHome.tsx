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
              {/* <Paper>
                <h2>{item.name}</h2>
                <p>{item.description}</p>

                <Button className="CheckButton">
                  Check it out!
                </Button>
              </Paper> */}
              <img alt={"manuk"} src={"https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} />
            </div>
          );
        })
      }
    </Carousel>
  );
}

export default CarouselHome;