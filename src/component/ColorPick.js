import React,{useState} from 'react'
import { ChromePicker } from 'react-color';

function ColorPick( props) {

    const [color, setColor] = useState('#ffffff')
    const [showColorPicker, setshowColorPicker] = useState(false)
    console.log('color code',color);

    const handleChange = (changedColor) =>{
        setColor(changedColor.hex)
        props.colorFun(changedColor.hex)
    }
    return (
        <>
            <button type='button'
                onClick={() => setshowColorPicker(showColorPicker => !showColorPicker)}
            >
                {showColorPicker ? 'close color picker' : 'pick a color'}
            </button>
            {
                showColorPicker && (
                    <ChromePicker
                        color={color}
                        onChange={changedColor => handleChange(changedColor)}
                        // onBlur={}
                    />
                )
            }
            <h1>COLOR{color}</h1>
        </>
    )
}

export default ColorPick