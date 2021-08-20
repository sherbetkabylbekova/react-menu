import {useState} from "react";

const Game = () => {
    const [number, setNumber] = useState(Math.round(Math.random() * 10))
    const [guess, setGuess] = useState()
    const [message, setMessage] = useState()
    const [freeAttempt, setFreeAttempt] = useState(3)
    const view = (event) =>{
        setGuess(event.target.value)
    }
    const check = () => {
        if (number === +guess) {
            setMessage('You won!')
        } else if (number !== guess) {
            setFreeAttempt(freeAttempt-1)
        } if(freeAttempt === 0){
            setMessage("You lose!")
        }
    }
    return (
        <div>
            <h2>Угадай число с 3 попыток </h2>
            <input type="text" onChange={view} value={guess}/>
            <button onClick={check}>Check</button>
            <span>{message}</span>
            <h3>У вас осталось {freeAttempt} попытки</h3>
        </div>
    )
}
export default Game