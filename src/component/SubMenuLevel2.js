import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Setting from './Setting'

function SubMenuLevel2(props) {

  const [showSetting, setshowSetting] = useState('hidden')

  const openSetting = () => {
    showSetting == 'hidden' ? setshowSetting('block') : setshowSetting('hidden')
  }

  // const {  menuTempName, menuTempCode, subMenuStatus, subMenuLevel2, reportTemplate_id } = props.values;
  const [menuHeight, setmenuHeight] = useState('h-0')
  const openSubMenu = () => {
    if (menuHeight == 'w-0') {
      setmenuHeight('w-auto')
    } else {
      setmenuHeight('w-0')
    }
  }
  console.log('prop data ', props.values);

  return (
    <>



      {/* <div className={`${subMenuStatus} transition-all duration-1000  overflow-hidden ml-8 `}>
        <>
        {
          subMenuLevel2?.map((data) => (
            <li className=' flex items-center  hover:bg-sky-100 hover:border-l-2 hover:border-indigo-600  hover:text-blue-500  text-gray-600 ' style={{ 'width': '250px' }} >
              <button className=" text-gray-900 font-semibold py-1 px-3  rounded inline-flex items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-yellow-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                {data.menu_id == 1 && <Link to={`/pagelayout/${reportTemplate_id}/${menuGroupId}/${menuTempName}/${menuTempCode}`}>{data.menu_name}</Link>}
                {data.menu_id == 2 && <Link to={`/detailPage/${reportTemplate_id}/${menuGroupId}/${menuTempName}/${menuTempCode}`}>{data.menu_name}</Link>}
                {data.menu_id == 3 && <Link to={`/footerPage/${reportTemplate_id}/${menuGroupId}/${menuTempName}/${menuTempCode}`}>{data.menu_name}</Link>}


              </button>
            </li>

          ))
        }
        </>
      </div> */}

      {/* <div className='bg-white float-right'>
        <button className="bg-yellow-200 px-8 py-1 drop-shadow-lg ">Preview</button>
        <button className="bg-purple-300 px-6 py-1 -ml-6 drop-shadow-lg " onClick={openSetting}>Setting</button>
       
        <div className={`${showSetting} `}>
          <Setting menuGroupId={menuGroupId} menuTempName={menuTempName} menuTempCode={menuTempCode} />
        </div>

      </div> */}

    </>
  )
}

export default SubMenuLevel2