
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function MenuComponent() {
    const [ToggleSubMenu, setToggleSubMenu] = useState(false)
    const [toggleMenu, settoggleMenu] = useState(false)

    const [DefaultTempList, setDefaultTempList] = useState()

    const handleToggle = () => {
        ToggleSubMenu ? setToggleSubMenu(false) : setToggleSubMenu(true)
    }
    const handleMenu = () => {
        // alert('click')
        toggleMenu ? settoggleMenu(false) : settoggleMenu(true)
    }

    const getData = () => {

        axios({
            method: "GET",
            url: "http://192.168.0.237:8000/api/template/list",

        })
            .then(function (response) {
                console.log("templateList", response.data);
                setDefaultTempList(response.data)

            });
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="dropdown inline-block relative">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" onClick={handleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-700">
                        <path fill-rule="evenodd" d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V10.5z" clip-rule="evenodd" />
                    </svg>
                    <span className='ml-1'>Default Template</span>
                </button>
                {
                    DefaultTempList?.map((data) => (
                        <ul className={`${toggleMenu ? '' : 'hidden'} dropdown-content absolute text-gray-700 pt-1 `}>                 
                            < li className="dropdown">

                                <a className=" hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap ml-4"  onClick={handleToggle}>{data?.template_name}</a>
                                <ul className={`${ToggleSubMenu ? '' : 'hidden'} dropdown-content absolute  text-gray-700 pl-5 ml-12 w-36 `}>

                                    <li>
                                        <Link to="/pagelayout">
                                            <h1 className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >
                                                Page Layout
                                            </h1>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/detailpage">
                                            <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                                                Detail
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#"> Footer</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    ))
                }
            </div>

        </>
    )
}

export default MenuComponent