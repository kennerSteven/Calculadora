import { useState } from "react";
import { evaluate } from "mathjs";
import Keypad from "./KeyPad/KeyPad";

export default function Calculator() {
  const [expression, setExpression] = useState("");

  function handleInput(val) {
    if (val === "RESET") return setExpression("");
    if (val === "DEL") return setExpression((prev) => prev.slice(0, -1));
    if (val === "=") return evaluar();
    setExpression((prev) => prev + val);
  }

  const evaluar = () => {
    try {
      const result = evaluate(expression);
      setExpression(String(result));
    } catch {
      setExpression("Error");
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="containerCalculator">
          <div className="display">
            <p>{expression || "0"}</p>
          </div>
          <div>
            <Keypad handleInput={handleInput} />
          </div> 
        </div>
      </div>
    </div>
  );
}
