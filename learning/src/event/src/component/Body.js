import './Body.css'
function Body(){
    // function handleOnClick(){
    //     alert("버튼을 클릭하였습니다.")
    // }
    function handleOnClick(e){

        console.log(e)
        console.log(e.target.name)
    }
    return(
        <div className='body'>
            <button onClick={handleOnClick} name='A버튼'>A 버튼 </button>
            <button onClick={handleOnClick} name='B버튼'>B 버튼 </button>
        </div>
    )
}

export default Body;