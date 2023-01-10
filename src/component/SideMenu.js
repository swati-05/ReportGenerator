//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 23-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - SideMenu
//    DESCRIPTION - SideMenu Contains menu list  
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuSideGroupList from './MenuSideGroupList'
import GroupComponent from './GroupComponent'
import Template from './Template';

function SideMenu(props) {

    const [addNewTemplate, setaddNewTemplate] = useState(false)
    const [templateInputValue, setTemplateInputValue] = useState('')
    const [templateCodeValue, setTemplateCodeValue] = useState('')
    const [searchGroupIdValue, setSearchGroupIdValue] = useState('')
    const [selectTemplateTypeValue, setSelectTemplateTypeValue] = useState('')
    const [groupList, setgroupList] = useState([])
    const [menuList, setmenuList] = useState([])


    // const [menuwidth, setMenuWidth] = useState('w-48')

    // const toggleMenu = () => {
    //     menuwidth == 'w-48' ? setMenuWidth('w-12') : setMenuWidth('w-48')
    // }

    {/**** add template  ****/ }

    const AddTemplate = () => {
        addNewTemplate ? setaddNewTemplate(false) : setaddNewTemplate(true)
    }

    {/**** function to get menu i.e list of group in sidebar  ****/ }


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

    return (
        <>
            <div className=''>

                {/**** default template and passing value to MenuSideGroupList component ****/}
                <div>
                    <div className={`w-48 h-screen  overflow-hidden shadow-lg border-4 shadow-[#074097] bg-[#074097]  `}  >

                        <div>
                            <span></span>
                        </div>
                        <div className='flex'>
                            <div className='flex-1 text-white h-10  text-sm w-full p-4'>GROUP LIST</div>
                            <div className='flex-1'><button className='bg-[#074097] '  > <Template />
                            </button></div>
                        </div>
                        <ul className=' '>
                            <li>
                                <button className=" text-gray-500 font-semibold p-4 rounded inline-flex items-center " onClick={AddTemplate}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-1 text-white  ">
                                        <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                                    </svg>
                                    <span className='ml-3 text-xs text-white hover:bg-sky-100 hover:text-[#074097]'>Default Template</span>
                                </button>
                            </li>
                            {
                                menuList?.map((data) => (
                                    <li>
                                        {/* {console.log('submenu data ', data?.sub_menu)}
                                    {console.log('submenu data type', data?.submenu)} */}
                                        <MenuSideGroupList menuGroupName={data?.menu_name} menuGroupId={data?.menu_id} subMenustatus={true} subMenu={data?.sub_menu} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideMenu