import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Dashboard from './Dashboard'
import Analytics from './Analytics'
import History from './History'

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab disableRipple sx={{ 'fontWeight': 'bold', 'textTransform': 'capitalize' }} label="Dashboard" {...a11yProps(0)} />
                    <Tab disableRipple sx={{ 'fontWeight': 'bold', 'textTransform': 'capitalize' }} label="History" {...a11yProps(1)} />
                    <Tab disableRipple sx={{ 'fontWeight': 'bold', 'textTransform': 'capitalize' }} label="Analytics" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Dashboard></Dashboard>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <History></History>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Analytics></Analytics>
            </CustomTabPanel>
        </Box>
    );
}
