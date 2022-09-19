import React,{useState} from 'react'

function TimeComponent() {
 let time = new Date().toLocaleTimeString();

 const [cTime, setcTime] = useState(time)

 const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setcTime(time)
 }
 setInterval(updateTime,1000)
  return (
    <div className=''>{cTime}</div>
  )
}

export default TimeComponent