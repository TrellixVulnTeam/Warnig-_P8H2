import { useState } from "react";
import '../styles/couter.scss'

export function Counter(){
    const [counter, setCounter ] = useState(0);
function increment(){
    setCounter(counter + 1);
    console.log(counter);
}
    return(
<div className="counter">
    <h2>{counter}</h2>
    <button type="button" onClick={increment}>Add</button>
</div>
    );
}