import { useState } from 'react'
import '../ui-button/ui-button.scss'


const UiButton=({text})=>{
    const [buttonClass , setbuttonClass] = useState('button')
    return(
        <div className="buttonContainer">
            <button onClick={()=>setbuttonClass('disabledButton')} className={buttonClass}>
            {text}
                </button>
        </div>
    )
}
export default UiButton;