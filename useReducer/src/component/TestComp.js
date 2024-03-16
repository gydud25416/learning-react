import { useReducer } from "react";

function reducer(){

}

const TestComp = () =>{ 
    const [count, dispatch] = useReducer(reducer, 0);
    return(
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <b>{count}</b>
            </div>
            <div>
                <button onClick={()=> dispatch({type : "INCREASE", data: 1})} >+</button>
                <button onClick={()=> dispatch({type : "DECREASE", data: 1})} >-</button>
            </div>
        </div>
    )
}
export default TestComp;