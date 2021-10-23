import { useState, SyntheticEvent } from 'react';
import { Paper, Typography, Tab, Tabs, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Box } from "@mui/system";
import { blue } from "@mui/material/colors";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
          {activityTour?.map((item: any, key: any) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  sx={{ backgroundColor: blue[500] }}
                >
                  <Typography sx={{ color: 'white' }}>
                    {`Hari ke - ${key + 1}`}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Paper>
  );
}

export default DetailTourTab;