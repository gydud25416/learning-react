import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case "INCREASE":
           return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return 1;
        case "INIT":
            return 0;
    }
}

function Testcomp(){

    const [count, dispatch] = useReducer(reducer, 1);

    return(
        <div>
            <p>{count}</p>
            <button onClick={ ()=>dispatch({type : "INCREASE", data : 1})}>+</button>
            <button onClick={ ()=>dispatch({type : "DECREASE", data : 1})}>-</button>
            <button onClick={ ()=>dispatch({type : "INIT" })}>초기화</button>

        </div>
    )
}

export default Testcomp;