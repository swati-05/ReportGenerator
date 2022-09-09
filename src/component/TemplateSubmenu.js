import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PageLayComponentOld from './PageLayComponentOld';
import DetailComponent from './DetailComponent';
import FooterComponent from './FooterComponent';
import Setting from './Setting';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function TabPanel(props) {
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
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
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

export default function TemplateSubmenu(props) {
    const [value, setValue] = React.useState(0);
    const [tabState, settabState] = useState(0)

    const { menuType } = useParams();

    console.log('menu params : ' + menuType);



    useEffect(() => {
        if (menuType == 'Document template' || menuType == 'Label template') {
            settabState(1);
        }
        if (menuType == 'Form template') {
            settabState(3);
        }
        if (menuType == 'General template') {
            settabState(3);
        }
    })


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const { menuTempName, menuTempCode, subMenuStatus, tempSubMenuLevel2, reportTemplate_id } = props.values;
    // console.log('props submenu : ',props.tempSubMenuLevel2)

    return (

        <>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    {tabState == 3 && <>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">

                            <Tab label='Setting' {...a11yProps(0)} />
                            <Tab label='layout' {...a11yProps(1)} />
                            <Tab label='Details' {...a11yProps(2)} />
                            <Tab label='Footer' {...a11yProps(3)} />
                        </Tabs>
                    </>}
                    {tabState == 1 && <>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label='Setting' {...a11yProps(0)} />
                            <Tab label='layout' {...a11yProps(1)} />
                        </Tabs>
                    </>}
                </Box>

                {tabState == 3 && <>
                    <TabPanel value={value} index={0}>
                        <Setting />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <PageLayComponentOld />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <DetailComponent />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <FooterComponent />
                    </TabPanel>
                </>}
                {tabState == 1 && <>
                    <TabPanel value={value} index={0}>
                        <Setting />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <PageLayComponentOld />
                    </TabPanel>
                </>}
            </Box>

        </>
    );
}
