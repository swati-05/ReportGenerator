import React from 'react'

function SubMenuLevel2(props) {
    console.log('submenulevel2....',props.subMenuLevel2)
  return (
    props?.subMenuLevel2.map((data)=>(
        <div className='bg-red-200'>{data.menu_name}</div>

    ))
  )
}

export default SubMenuLevel2