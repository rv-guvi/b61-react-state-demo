import { useState } from "react";

function Light() {
    const [lightSwitch, setSwitch] = useState(true)

    let toggleSwitch = (toggleState) => {
        setSwitch(toggleState)
    }


    return <div>
        <div className="light" style={{ backgroundColor: !lightSwitch ? 'grey' : 'red' }}>
        </div>

        <button onClick={() => {
            toggleSwitch(true)
        }}>On</button>
        <button onClick={() => {
            toggleSwitch(false)
        }}>Off</button>
    </div>
}

export default Light;