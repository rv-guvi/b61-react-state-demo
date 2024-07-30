import { useState } from "react";

function Bulb() {

    const [counter, setCounter] = useState(0)

    let inc = () => {
        if (counter == 10) {
            setCounter(0)
        } else {
            setCounter(counter + 1)
        }
    }

    let dec = () => {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

    return (<div>
        <button onClick={inc} className="btn btn-primary">+</button>
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-primary">-</button>
    </div>)
}

export default Bulb;