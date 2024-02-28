
const Controller = ({handleOnClick})=>{
    
    return(
        <div>
            <button onClick={()=>{handleOnClick(-1)}}>-1</button>
            <button onClick={()=>{handleOnClick(-10)}}>-10</button>
            <button onClick={()=>{handleOnClick(-100)}}>-100</button>
            <button onClick={()=>{handleOnClick(+100)}}>+100</button>
            <button onClick={()=>{handleOnClick(+10)}}>+10</button>
            <button onClick={()=>{handleOnClick(+1)}}>+1</button>
        </div>
    )
}

export default Controller