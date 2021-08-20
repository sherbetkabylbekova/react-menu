import React, {useState} from "react";
const Todos = () => {
    const [todos, setTodos] = useState(['Моя новая задача', 'Моя новая задача', 'Моя новая задача'])
    const [text,setText] = useState("")
    const addTodo = () => {
        if(text.trim() !== ""){
            setTodos([...todos, text])
        }
        setTodos([...todos,text])
        setText ('')
    }
    const delTodo = () => {
        setTodos(todos.slice(0, -1))
    }
    const addText = (event) => {
    setText(event.target.value)
    }
    return (
        <div>
            <input type="text" onChange={addText} value={text}/>
            <button onClick={addTodo}>Добавить дело</button>
            <button onClick={delTodo}>Удалить дело</button>
            <ul>
                {
                    todos.map((el, idx) => (
                        <li key={idx}>{el}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Todos