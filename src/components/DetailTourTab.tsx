import { useState, SyntheticEvent } from 'react';
import { Paper, Typography, Tab, Tabs, Stepper, Step, StepLabel, StepContent } from "@mui/material";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import TabPanel from "./TabPanel";

interface DetailTourProps {
  activityTour?: Array<any>
}

const DetailTourTab = ({ activityTour }: DetailTourProps) => {
  const [value, setValue] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <Paper elevation={4} sx={{ marginBottom: 4, padding: 2 }}>
      <Box sx={{ bgcolor: 'background.paper' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Kegiatan Tour" {...a11yProps(0)} />
            <Tab label="Galery" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Stepper orientation="vertical" activeStep={-1}>
            {activityTour?.map((item: any, key: any) => {
              return (
                <Step key={key} active={true} >
                  <StepLabel>{`Hari ke - ${key + 1}`}</StepLabel>
                  <StepContent>
                    <Typography>
                      {item.description}
                    </Typography>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Paper>
  );
}

export default DetailTourTab;