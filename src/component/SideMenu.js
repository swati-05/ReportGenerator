import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuSideGroupList from './MenuSideGroupList'
import GroupComponent from './GroupComponent'
import QueueIcon from '@mui/icons-material/Queue';

function SideMenu(props) {

    const [addNewTemplate, setaddNewTemplate] = useState(false)
    const [templateInputValue, setTemplateInputValue] = useState('')
    const [templateCodeValue, setTemplateCodeValue] = useState('')
    const [selectGropuIdValue, setselectGropuIdValue] = useState('')
    const [selectTemplateTypeValue, setSelectTemplateTypeValue] = useState('')
    const [groupList, setgroupList] = useState([])
    const [menuList, setmenuList] = useState([])

    const AddTemplate = () => {

        addNewTemplate ? setaddNewTemplate(false) : setaddNewTemplate(true)
    }

    const SaveTemplate = () => {
        const data = { templateName: templateInputValue, templateCode: templateCodeValue, groupId: selectGropuIdValue, detailLayout: selectTemplateTypeValue };
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
    const getData = () => {
        axios({
            method: "GET",
            url: "http://192.168.0.237:8000/api/getmenu",

        })
            .then(function (response) {
                console.log("menulist", response.data);
                setmenuList(response.data)

            });
    }
    useEffect(() => {
        getData()
    }, [])

    console.log("tempData", templateInputValue, templateCodeValue, selectGropuIdValue, selectTemplateTypeValue)

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


    // console.log("menu list", menuList)



    return (
        <>
            <div className=''>
                <div className='h-screen w-56 shadow-xl ' style={{ 'backgroundColor': '#1C4E80' }}>
                    <ul>
                        <li>
                            <button className=" text-gray-100 font-semibold py-2 px-4 rounded inline-flex items-center " onClick={AddTemplate}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-100">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className='ml-1'>Default Template</span>
                            </button>

                        </li>
                        {
                            menuList?.map((data) => (
                                <li>
                                    {console.log('submenu data ', data?.sub_menu)}
                                    {console.log('submenu data type', data?.submenu)}
                                    <MenuSideGroupList menuGroupName={data?.menu_name} menuGroupId={data?.menu_id} subMenustatus={true} subMenu={data?.sub_menu} />
                                </li>
                            ))
                        }


                    </ul>

                </div>
                <div className={` ${addNewTemplate ? '' : 'hidden'} absolute   top-[10rem] left-[20rem] `}>
                    <div class="overflow-hidden shadow-lg  h-90 w-2/5  m-auto">
                        <img alt="eggs" src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/tp183-kul-presentation-10.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=75350cd9a92c664628ee492d4f55999b" class="" />
                        <div class="bg-white w-full p-4 relative">
                            <button aria-label="Go to article" type="button" class="absolute rounded-full bg-indigo-500 text-white w-12 h-12 right-8 -top-6" onClick={SaveTemplate}>

                                <QueueIcon />
                            </button>
                            <p className='text-bold font-sans'>ADD TEMPLATE</p>
                            <div className='flex'>

                                <div className='flex-1'>
                                    <select className=' bg-slate-200 text-sm w-36 border-2 ml-2 mt-5' placeholder='select group' onChange={(e) => setselectGropuIdValue(e.target.value)}>
                                        <option> select group </option>
                                        {
                                            groupList?.map((data) => (
                                                <option value={data?.id}>{data?.search_group}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className='flex-1 mt-4 ml-2 rounded-xl h-8 bg-green-400'>
                                    <GroupComponent />
                                </div>
                            </div>


                            <div className='flex p-2 mt-1'>
                                <div className='flex-1 text-xs' ><span>Template Name</span> </div>
                                <div className='flex-1'> <input type="text" className='bg-slate-200' name='templateName' value={templateInputValue} onChange={(e) => setTemplateInputValue(e.target.value)} /></div>
                            </div>
                            <div className='flex p-2'>
                                <div className='flex-1 text-xs' ><span>Template Code</span> </div>
                                <div className='flex-1'> <input type="text" className='bg-slate-200' name='templateCode' value={templateCodeValue} onChange={(e) => setTemplateCodeValue(e.target.value)} /></div>
                            </div>

                            <div className='flex p-2'>
                                <div className='flex-1 text-xs -ml-2' ><span>Template Type</span> </div>
                                <div className='flex-1 -mt-6'>
                                    <select className=' bg-slate-200 text-sm w-[11.3rem] border-2  mt-5' placeholder='select group' onChange={(e) => setSelectTemplateTypeValue(e.target.value)}>
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
            </div>
        </>
    )
}

export default SideMenu