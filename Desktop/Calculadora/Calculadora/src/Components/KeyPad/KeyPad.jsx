import Button from "../Button/Button";
import "../KeyPad/KeyPad.css";
import { keys } from "../../Data";

export default function Keypad({ handleInput }) {
  return (
    <div className="row containerKeypad gap-3">
      {keys.map((key) => {
        const isLarge = key === "RESET" || key === "=" || key === "DEL";

        return (
          <div className="col-3" key={key}>
            <Button label={key} onClick={handleInput} widthLarge={isLarge} />
          </div>
        );
      })}
    </div>
  );
}
