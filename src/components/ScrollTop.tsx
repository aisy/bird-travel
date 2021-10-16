import { MouseEvent } from 'react';
import { useScrollTrigger, Zoom, Box, Fab, Toolbar } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const InitTopPosition = () => (
  <Toolbar id="back-to-top-anchor" />
);

const ScrollTopButton = (props: any, icon: any) => {
  const { window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role={"presentation"}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Fab color={"primary"} size={"small"} aria-label={"Scroll back to top"}>
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}

export {
  InitTopPosition,
  ScrollTopButton,
};