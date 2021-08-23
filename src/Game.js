import {useState, useEffect} from "react";

const Game = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState("")
    const [message, setMessage] = useState("")
    const [freeAttempt, setFreeAttempt] = useState(3)
    const [count,setCount] = useState(0)
    const [prompt,setPrompt] = useState("")
    const [lose,setLose] = useState(0)
    const restart = () => {
        setNumber(Math.round(Math.random()*10))
        setGuess(null)
        setMessage("")
        setFreeAttempt(3)
        setPrompt("")
    }
    const view = (event) =>{
        setGuess(event.target.value)
    }
    const check = () => {
        if(freeAttempt){
        setFreeAttempt(freeAttempt -1)
    }}
    useEffect(() =>{
        if (number === +guess ){
            setMessage("Вы выиграли!")
            setCount(count +1)
            setPrompt('')
        }else if(freeAttempt === 0){
            setMessage('Вы проиграли!')
            setLose(lose +1)
        }else if(guess<number){
            setPrompt('Недобор')
        }else if(guess>number){
            setPrompt('Перебор')
        }

    },[freeAttempt])
    return (
        <div className="row my-5">
            <div className='col-6 offset-3'>
                <h2>Угадай число с 3 попыток</h2>
                <div className="d-flex">
                    <input type="text" onChange={view} value={guess} placeholder="Введите число  от 0 до 10 " className="form-control"/>
                    <button onClick={check} disabled={!guess} className="btn btn-success ms-2">Check</button>
                    <button onClick={restart} className="btn btn-warning ms-2">Restart</button>

                </div>
                <div>{message}</div>
                {
                    message.length === 0 &&
                    <h3>У вас осталось {freeAttempt} {freeAttempt === 1 ? "попытка" : "попытки"}</h3>
                }
                <h2>Ваш счет: {count}</h2>
                <h2>{prompt}</h2>
                <h2>Вы проиграли:{lose}</h2>
            </div>
        </div>
    )
}
export default Game