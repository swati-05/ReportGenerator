import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Field, Formik } from 'formik';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #ffff',
    boxShadow: 24,
  
    p: 4,
};

export default function GroupComponent() {




    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    return (
        <div>
            <Button onClick={handleOpen}>Add Group</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik
                        initialValues={{
                            searchGroup: '',
                            isReport: false,
                          
                        }}
           
   
                        onSubmit={(values, { setSubmitting }) => {
                            const data = {name:values.groupName,isReport:values.isReport,searchGroup:values.searchGroup}
                            setTimeout(() => {
                                // alert(JSON.stringify(values, null, 2));

                                
                                axios({
                                    method: "post",
                                    url: "http://192.168.0.237:8000/api/group/save",
                                  data: data
                                })
                                    .then(function (response) {
                                        console.log("searchGroup", response.data);
                                    });
                                console.log( "Group data", values.searchGroup, values.isReport)
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <span>Group Name</span>
                                    <span>
                                        <input
                                            className='bg-slate-50 border-2'
                                            id="searchGroup"
                                            name="searchGroup"
                                            type="text"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.searchGroup}
                                        /></span>
                                </div>
                                <div>

                                    <Field
                                        type="checkbox"
                                        name="isReport"
                                        // value={values.isReport}
                                    />
                                    <span className='ml-2'>Report</span>

                                    {/* <Field
                                        className='ml-4'
                                        type="checkbox"
                                        name="searchGroup"
                                       
                                    />
                                    <span className='ml-2'>Searchable</span> */}
                                </div>
                                <div>
                                    <button type='submit' className='bg-indigo-500 p-1 w-14 rounded-xl float-right'>Add</button>
                                </div>
                            </form>
                        )}
                    </Formik    >
                </Box>
            </Modal>
        </div>
    );
}
