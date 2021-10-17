import Carousel from "react-material-ui-carousel";
import { Paper, Button } from '@mui/material';

const CarouselHome = () => {
  let items = [
    {
      name: "Random Name 1",
      src: "https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Random Name 2",
      src: "https://images.unsplash.com/photo-1485488001527-2e2259690bcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Random Name 3",
      src: "https://images.unsplash.com/photo-1526367389455-42582383196c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <Carousel
      animation={"fade"}
      autoPlay={true}
    >
      {
        items.map((item, i) => {
          return (
            <div key={i}>
              <img
                style={{
                  width: "100%",
                  height: 600,
                  objectFit: "cover",
                }}
                alt={item.name}
                src={item.src}
              />
            </div>
          );
        })
      }
    </Carousel>
  );
}

export default CarouselHome;