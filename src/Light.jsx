import { useState } from "react";

function Light() {
  const [lightSwitch, setSwitch] = useState(true);
  const [color, setColor] = useState("");
  const [opacityVal, setOpactityVal] = useState(1);

  let toggleSwitch = (toggleState) => {
    setSwitch(toggleState);
  };

  let colorHandler = (color) => {
    if (lightSwitch === true) {
      setColor(color);
    }
  };

  let opacityHandler = (opacityVal) => {
    if (opacityVal >= 0 && opacityVal <= 1) {
      setOpactityVal(opacityVal);
    }
  };

  // Hello

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
      <div
        className="light"
        style={{
          backgroundColor: !lightSwitch ? "grey" : color,
          opacity: opacityVal,
        }}
      ></div>

      <div className="m-3">
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            toggleSwitch(true);
          }}
        >
          On
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={() => {
            toggleSwitch(false);
          }}
        >
          Off
        </button>
      </div>

      <div className="m-3">
        <button
          className="btn btn-danger"
          onClick={() => {
            colorHandler("#FF0000");
          }}
        >
          Red
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            colorHandler("#0000FF");
          }}
        >
          Blue
        </button>
        <button
          className="btn btn-success"
          onClick={() => {
            colorHandler("#008000");
          }}
        >
          Green
        </button>
      </div>

      <div className="d-flex">
        <button
          onClick={() => {
            opacityHandler(opacityVal - 0.1);
          }}
          className="btn btn-dark m-3"
        >
          -
        </button>
        <h1 className="m-3">{opacityVal.toFixed(1)}</h1>
        <button
          onClick={() => {
            opacityHandler(opacityVal + 0.1);
          }}
          className="btn btn-dark m-3"
        >
          +
        </button>
      </div>
      </div>
    </div>
  );
}

export default Light;
