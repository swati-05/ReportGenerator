import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuSideGroupList from './MenuSideGroupList'
import GroupComponent from './GroupComponent'
import QueueIcon from '@mui/icons-material/Queue';

function SideMenu(props) {

    const [addNewTemplate, setaddNewTemplate] = useState(false)
    const [templateInputValue, setTemplateInputValue] = useState('')
    const [templateCodeValue, setTemplateCodeValue] = useState('')
    const [searchGroupIdValue, setSearchGroupIdValue] = useState('')
    const [selectTemplateTypeValue, setSelectTemplateTypeValue] = useState('')
    const [groupList, setgroupList] = useState([])
    const [menuList, setmenuList] = useState([])


    const [menuHeight, setmenuHeight] = useState('h-0')
    const toggleMenu = () => {
        menuHeight == 'h-0' ? setmenuHeight('h-screen') : setmenuHeight('h-0')
    }

    const AddTemplate = () => {

        addNewTemplate ? setaddNewTemplate(false) : setaddNewTemplate(true)
    }

    const SaveTemplate = () => {
        const data = { templateName: templateInputValue, templateCode: templateCodeValue, searchGroupId: searchGroupIdValue, detailLayout: selectTemplateTypeValue };
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

    console.log("tempData", templateInputValue, templateCodeValue, searchGroupIdValue, selectTemplateTypeValue)

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
            <div className='w-12 bg-red-200'>
            {/* <button className='bg-red-300 h-8  w-16 - p-2 rounded-r-full' onClick={toggleMenu} >menu</button> */}
                <div className={`${menuHeight} h-screen w-48  shadow-xl bg-white `}  >
                    <ul>
                        <li>
                            <button className=" text-gray-500 font-semibold p-4 rounded inline-flex items-center " onClick={AddTemplate}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1">
                                <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
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
                                    <select className=' bg-slate-200 text-sm w-36 border-2 ml-2 mt-5' name='searchGroupId' placeholder='select group' onChange={(e) => setSearchGroupIdValue(e.target.value)}>
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