import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GroupComponent from './GroupComponent';
import axios from 'axios';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import QueueIcon from '@mui/icons-material/Queue';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 8,
};




export default function Template() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [templateInputValue, setTemplateInputValue] = useState('')
    const [templateCodeValue, setTemplateCodeValue] = useState('')
    const [searchGroupIdValue, setSearchGroupIdValue] = useState('')
    const [selectTemplateTypeValue, setSelectTemplateTypeValue] = useState('')
    const [groupList, setgroupList] = useState([])

    {/**** function to save template  ****/ }
    const SaveTemplate = () => {
        const data = { templateName: templateInputValue, templateCode: templateCodeValue, searchGroupId: searchGroupIdValue, detailLayout: selectTemplateTypeValue };
        alert("confirm")
        console.log('data from the form', data);
        axios({
            method: "post",
            url: "http://192.168.0.237:8000/api/template/save",
            data: data,
        })
            .then(function (response) {
                console.log("templateListSave", response.data);


            });
    }

    {/**** function to get grouplist  ****/ }

    const getMenuList = () => {
        axios({
            method: "GET",
            url: "http://192.168.0.237:8000/api/group/list",

        })
            .then(function (response) {
                console.log("grouplist", response.data);
                setgroupList(response.data)

            });
    }
    useEffect(() => {
        getMenuList()
    }, [])


    console.log("tempData", templateInputValue, templateCodeValue, searchGroupIdValue, selectTemplateTypeValue)
    return (
        <div>
            <Button onClick={handleOpen}><QueueIcon/></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div class="grid grid-cols-3 gap-4 ">
                        <div class=" ">
                            <img src='https://img.freepik.com/free-vector/blogging-illustration-concept_114360-821.jpg?w=740&t=st=1663411895~exp=1663412495~hmac=563b3b04bdfc2cf8a65b853dc0ce41c3ffe5d7223bf9fd063ab20b4ea61a5ae3' className='64' />
                            <button aria-label="Go to article" type="button" class=" w-full bg-[#074097] text-white h-12 right-8 -top-6" onClick={SaveTemplate}>
                           <SaveAsIcon/>  SAVE
                            </button>

                        </div>
                        <div class=" col-span-2">
                            <h1 className='text-gray-600 font-semibold text-xl'>CREATE TEMPLATE</h1>
                            <div className=''>

                                <div className='flex p-2 mt-1'>
                                    <div className='flex-1 text-xs' >
                                        <select className='  text-sm w-56  ml-2 mt-5 h-7 shadow-md shadow-[#c0d2ed] border-[#074097]' name='searchGroupId' placeholder='select group' onChange={(e) => setSearchGroupIdValue(e.target.value)}>
                                            <option> select group </option>
                                            {
                                                groupList?.map((data) => (
                                                    <option value={data?.id}>{data?.search_group}</option>
                                                ))
                                            }
                                        </select></div>
                                    <div className='flex-1 mt-4 ml-4  rounded-lg h-8'> <GroupComponent />
                                    </div>
                                </div>
                                <div className='flex p-2 mt-1'>
                                    <div className='flex-1 text-sm text-gray-600' >
                                        <span>Template Name</span>
                                    </div>
                                    <div className='flex-1'>
                                        <input type="text" className='text-sm w-56  ml-2  h-7 shadow-md shadow-[#c0d2ed] border-[#074097]' name='templateName' value={templateInputValue} onChange={(e) => setTemplateInputValue(e.target.value)} />
                                    </div>
                                </div>
                                <div className='flex p-2'>
                                    <div className='flex-1 text-sm text-gray-600' >
                                        <span>Template Code</span>
                                    </div>
                                    <div className='flex-1'>
                                        <input type="text" className='text-sm w-56  ml-2  h-7 shadow-md shadow-[#c0d2ed] border-[#074097]' name='templateCode' value={templateCodeValue} onChange={(e) => setTemplateCodeValue(e.target.value)} />
                                    </div>
                                </div>

                                <div className='flex p-2'>
                                    <div className='flex-1 text-sm  text-gray-600' >
                                        <span>Template Type</span>
                                    </div>
                                    <div className='flex-1 -mt-6'>
                                        <select className=' text-sm w-56  ml-2 mt-5 h-7 shadow-md shadow-[#c0d2ed] border-[#074097]' placeholder='select group' onChange={(e) => setSelectTemplateTypeValue(e.target.value)}>
                                            <option  >select</option>
                                            <option value="General">General</option>
                                            <option value="Label">Label</option>
                                            <option value="Form"> Form</option>
                                            <option value="Document">Document</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
