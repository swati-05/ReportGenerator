//////////////////////////////////////////////////////////////////////////////////////
//    Author - swati sharma
//    Version - 1.0
//    Date - 23-09-2022
//    Revision - 1
//    Project - JUIDCO
//    Component  - MenuSideGroupList
//    DESCRIPTION - MenuSideGroupList component contain subMenu list passing from SideMenu Component
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function MenuSideGroupList(props) {

    const [menuList, setmenuList] = useState('w-0')
    const menuClick = () => {
        menuList == 'w-0' ? setmenuList('w-48') : setmenuList('w-0')
    }


    // const getTemplateListByGroup = () => {
    //     axios({
    //         method: "GET",
    //         url: "",

    //     })
    //         .then(function (response) {
    //             console.log("grouplist", response.data);
    //             setTemplateList(response.data)

    //         });
    // }
    // useEffect(() => {
    //     getTemplateListByGroup()
    // }, [])

    console.log("sub menu first level ...", props.subMenu)


    return (
        <>
            <div className=' mt-1'>

                {/**** Side menu group listing   ****/}

                <div>
                    <li onClick={() => menuClick()} className='ml-1 text-white text-left  '>
                        <button className=" text-gray-500 font-semibold py-2 px-4  inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white " >
                                <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                            </svg>
                            <label className='ml-3 text-xs  text-white ' value={props.menuGroupId}>{props.menuGroupName}</label>
                        </button>
                    </li>
                </div>

                {/**** If group is having template list i.e if status is true then template list will open 
             and linked to templateSubmenu Component  ****/}
                {
                    !props.subMenuStatus &&
                    <div className={`${menuList} absolute h-screen top-[3.5rem] z-10 -mt-[1rem] bg-white shadow-inner shadow-[#074097]  transition-all duration-1000 ml-48 overflow-hidden  `}>
                        {
                            props.subMenu.map((data) => (
                                <>
                                    <div >
                                        <button className="  font-semibold   rounded inline-flex items-center ml-5 p-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-[#074097] ">
                                                <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                                                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                                            </svg>
                                            <ul>
                                                <Link to={`templateSubmenu/${data.submenu[0]?.type}/${data?.menu_name}/${data?.menu_code}/${props.menuGroupId}/${data?.menu_id}`} >
                                                    <li className='ml-3 text-sm text-[#074097]' onClick={menuClick} value={data.menu_id}>{data.menu_name}</li>
                                                </Link>
                                            </ul>
                                        </button>
                                    </div>
                                </>
                            ))
                        }

                    </div>

                }

            </div>


        </>
    )
}

export default MenuSideGroupList