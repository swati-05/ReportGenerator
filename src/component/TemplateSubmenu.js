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
import axios from 'axios';


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


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
    let { menuName, menuCode, groupId, menuId } = useParams();
    const [ResponseData, setResponseData] = useState('')

    console.log('menu params : ' + menuType);
    console.log('menu params template: ' + menuName, menuCode);

    console.log('menu params groupId ' + groupId, menuId);

    // const ResponseData = "hello"
    console.log("pdf....", ResponseData)

    // const pdfData =  (ResponseData.ArrayBuffer());
    // console.log("PDF DATA ....", pdfData)



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

    const [submitStatus, setSubmitStatus] = useState(false)
    const [allLayoutData, setAllLayoutData] = useState([])


    const collectAllLayoutData = (key, formData) => {
        console.log('prev Data', allLayoutData)
        setAllLayoutData({ ...allLayoutData, [key]: formData })
    }

    const submitButtonToggle = () => {
        setSubmitStatus(true)
    }

    const submitAllData = () => {
        console.log(" all layout data", allLayoutData)
  

          

            axios({
                method: "post",
                url: "http://192.168.0.237:8000/api/getreport/template",
                data: allLayoutData,
                // responseType: 'arraybuffer',
                // headers: {
                //     'Content-Type': 'application/json',
                //     Accept: 'application/pdf',
                // }
            },)
                .then(function (response) {
                    console.log("all layout data", response.data);

                    setResponseData(response.data);

                });
         }

        const file = new Blob([ResponseData],
            { type: 'application/pdf' });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        // window.open(fileURL);
        console.log("pdf file ", file)



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
                            <Setting collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle} tempMenuName={menuName} tempMenuCode={menuCode} tempLayoutType={menuType} groupId={groupId} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <PageLayComponentOld collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle} tempMenuId={menuId} />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <DetailComponent collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle} tempMenuId={menuId} />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <FooterComponent collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle} tempMenuId={menuId} />
                        </TabPanel>
                    </>}
                    {tabState == 1 && <>
                        <TabPanel value={value} index={0}>
                            <Setting collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle} tempMenuName={menuName} tempMenuCode={menuCode} tempLayoutType={menuType} groupId={groupId} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <PageLayComponentOld collectAllLayoutDataFun={collectAllLayoutData} submitFun={submitButtonToggle} tempMenuId={menuId} />
                        </TabPanel>
                    </>}
                </Box>

                {/* {submitStatus && <div className="flex items-center justify-center"><button type="button" className="absolute bottom-40 mx-auto px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-xl hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">Submit Form </button></div>} */}
                <button className='bg-red-400 w-48 p-1 rounded-lg' onClick={submitAllData}>Submit all Data</button>

                <div className='h-48 w-full bg-gray-700'>
                    <object id="pdf" data={fileURL} type="application/pdf" width="100%" height="100%">
                    <p>Alternative text - include a link </p>
                </object>


                </div>
            </>
        );
    }
