import React, { useState, useEffect } from 'react'
import axios from 'axios';

function MenuSideGroupList(props) {


    const [menuHeight, setmenuHeight] = useState('h-0')
    const toggleGroupMenuList = () => {
        if (menuHeight == 'h-0') {
            setmenuHeight('h-auto')
        } else {
            setmenuHeight('h-0')
        }
    }

    const [templateList, setTemplateList] = useState()



    const getTemplateListByGroup = () => {
        axios({
            method: "GET",
            url: "http://192.168.0.237:8000/api/template/list",

        })
            .then(function (response) {
                console.log("grouplist", response.data);
                setTemplateList(response.data)

            });
    }
    useEffect(() => {
        getTemplateListByGroup()
    }, [])


    return (
        <>
            <div>
                <li onClick={toggleGroupMenuList} className='ml-1 text-white text-left '>
                    <button className=" text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <label className='ml-1' value={props.groupId}>{props.groupName}</label>
                    </button>
                </li>


                {
                    props.subMenuStatus &&
                    <div className={`transition-all duration-1000 ${menuHeight} overflow-hidden bg-sky-50`}>
                        {
                            templateList.map((data) => (
                                <li className='flex items-center pl-8 py-2 hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500  text-gray-600' style={{ 'width': '250px' }}>
                                    <button className=" text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <label className='ml-1' value={data?.id}> {data?.template_name}</label>
                                    </button>
                                </li>
                            ))
                        }
                    </div>



                }

            </div>
        </>
    )
}

export default MenuSideGroupList