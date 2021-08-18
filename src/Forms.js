import React, {useState} from 'react';

const Forms = () => {
    const [form, setForm] = useState("circle")
    const cir = () =>{
        setForm("Circle")
    }
    const squ = () =>{
        setForm("Square")
    }
    return (
        <div>
            <button onClick={cir}>Circle</button>
            <button onClick={squ}>Square</button>
            <span>{form}</span>
        </div>
    )
}
export default Forms