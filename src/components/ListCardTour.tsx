import { Grid } from "@mui/material";
import CardTour from "./CardTour";


interface ListCardTourProp {
  data?: Array<any>,
  spacing?: number,
}

const ListCardTour = ({ data, spacing }: ListCardTourProp) => {

  return (
    <Grid container spacing={spacing ? spacing : 2}>
      {
        data?.map((item: any, key: number) => {
          return (
            <Grid
              key={key}
              item
              xs={4}
            >
              <CardTour
                title={item.title}
                image={item.image}
                content={item.content}
              />
            </Grid>
          );
        })
      }
    </Grid>
  );
}

export default ListCardTour;