import React, {useState} from 'react';


const DecInc = () => {
    const [count, setCount] = useState(0)
    const dec = ()=> {
        setCount(count - 1 )
    }
    const inc = ()=> {
        setCount(count + 1 )
    }
    return (
        <div>
            <button onClick={dec}> - </button>
            <span>{count}</span>
            <button onClick={inc}> + </button>
        </div>
    )
}
export default DecInc