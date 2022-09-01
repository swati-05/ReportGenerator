import React, { useState, useEffect } from 'react'
import axios from 'axios'

function SideMenu() {

    const [addNewTemplate, setaddNewTemplate] = useState(false)
    const [templateList, setTemplateList] = useState([{
        detail_layout: null,
        detail_line_spacing: null,
        detail_sql: null,
        footer_height: null,
        footer_sql: null,
        groupby_expression: null,
        header_distance: null,
        header_height: null,
        header_height_page2: null,
        id: 9,
        is_compact_footer: false,
        is_default: false,
        is_detail_wordwrap: false,
        is_global_header: false,
        is_landscape: false,
        is_page_layout_in_pager2: false,
        is_render_global_header: false,
        is_show_grid_line: false,
        label_column_count: null,
        label_row_count: null,
        layout_sql: null,
        paper_size_enum: null,
        parent_id: null,
        screen_display_string: null,
        status: 1,
        template_code: null,
        template_name: null,
    }])
    const [templateInputValue, setTemplateInputValue] = useState('')
    const [templateGroupValue, setTemplateGroupValue] = useState('')

    const AddTemplate = () => {

        addNewTemplate ? setaddNewTemplate(false) : setaddNewTemplate(true)
    }
    const getData = () => {

        axios({
            method: "GET",
            url: "http://192.168.0.237:8000/api/template/list",

        })
            .then(function (response) {
                console.log("templateList", response.data);
                setTemplateList(response.data)

            });
    }


    useEffect(() => {
        getData()
    }, [])

    const SaveTemplate = () => {
        const data = {templateName:templateInputValue , groupId:templateGroupValue };
        console.log('data from the form',data);
        axios({
            method: "post",
            url: "http://192.168.0.237:8000/api/template/save",
            data:  data ,
        })
            .then(function (response) {
                console.log("templateListSave", response.data);
               

            });
    }

    console.log("tempData", templateInputValue,templateGroupValue)

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
                        templateList?.map((data) => (

                            <li className='ml-1 text-white text-left '>
                                <button  className=" text-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                                <span className='ml-1'>  {data?.template_name}</span>
                                </button>
                                </li>
                        ))
                    }
                </ul>

            </div>
            <div className={` ${addNewTemplate ? '' : 'hidden'} absolute text-left bg-gray-50  w-44  p-1 top-10 left-0  z-10 `}>

                <p className='text-black text-xs ml-2'>Template Name</p>
                <input type="text" name='templateName' value={templateInputValue} onChange={(e)=> setTemplateInputValue(e.target.value)} 
                className='bg-gray-500 w-40 ml-2' />
                   <p className='text-black text-xs ml-2'>Group </p>
                <input type="text" name='templateName' value={templateGroupValue} onChange={(e)=> setTemplateGroupValue(e.target.value)} 
                className='bg-gray-500 w-40 ml-2' />
                {/* <div className='ml-2'>
                    <input type="checkbox" /> <span className="text-xs p-2">Label</span >
                    <input type="checkbox" /> <span className="text-xs">General</span > <br />
                    <input type="checkbox" /> <span className="text-xs p-2">Form</span >
                    <input type="checkbox" /> <span className="text-xs">Document</span >
                </div> */}

                <button className='bg-green-500 float-right mt-1'> <p className='text-white text-xs w-10 ' onClick={SaveTemplate}>ADD</p> </button>

            </div>
        </>
    )
}

export default SideMenu