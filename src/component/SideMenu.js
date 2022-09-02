import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuSideGroupList from './MenuSideGroupList'

function SideMenu(props) {

    const [addNewTemplate, setaddNewTemplate] = useState(false)
    const [templateInputValue, setTemplateInputValue] = useState('')
    const [templateCodeValue, setTemplateCodeValue] = useState('')
    const [groupList, setgroupList] = useState([])

    const AddTemplate = () => {

        addNewTemplate ? setaddNewTemplate(false) : setaddNewTemplate(true)
    }

    const SaveTemplate = () => {
        const data = { templateName: templateInputValue, templateCode: templateCodeValue };
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
            url: "http://192.168.0.237:8000/api/group/list",

        })
            .then(function (response) {
                console.log("grouplist", response.data);
                setgroupList(response.data)

            });
    }
    useEffect(() => {
        getData()
    }, [])

    console.log("tempData", templateInputValue, templateCodeValue)

    return (
        <>
            <div className='h-screen w-48 bg-gray-700'>
                <ul>
                    <li>
                        <button className=" text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center " onClick={AddTemplate}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className='ml-1'>Default Template</span>
                        </button>

                    </li>
                    {
                        groupList?.map((data) => (
                            <li>
                                <MenuSideGroupList groupName={data?.search_group} groupId={data?.id} subMenustatus={true} />
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div className={` ${addNewTemplate ? '' : 'hidden'} absolute text-left bg-gray-50  w-3/12 h-56  p-1 top-20 left-50  z-50 `}>

                <span >
                    <select className=' bg-slate-200 text-sm w-36 border-2 ml-8 mt-5' placeholder='select group'>
                        <option> select group </option>
                    </select>
                </span>
                <span>
                    <button className='bg-green-400  ml-2 p-0  '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>
                </span>
                <p className='text-black text-xs ml-8 mt-4'>Template Name</p>
                <input type="text" name='templateName' value={templateInputValue} onChange={(e) => setTemplateInputValue(e.target.value)}
                    className='bg-gray-500 w-40 ml-8' />
                <p className='text-black text-xs ml-8'>Template Code </p>
                <input type="text" name='templateName' value={templateCodeValue} onChange={(e) => setTemplateCodeValue(e.target.value)}
                    className='bg-gray-500 w-40 ml-8' />
                <button className='bg-green-500 float-right mt-1'> <p className='text-white text-xs w-10 ' onClick={SaveTemplate}>ADD</p> </button>

            </div>
        </>
    )
}

export default SideMenu