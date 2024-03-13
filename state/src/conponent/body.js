import {useState} from "react"

/* state 값 변경하기 */
// function Body(){
//     const [count, setCount] = useState(0)

//     const onIncrease = () =>{
//         setCount(count+1);
//     }
//     return(
//         <div class="body">
//             <h2>{count}</h2>
//             <button onClick={onIncrease}>+</button>
//         </div>
//     )
// }

/* 입력 폼 만들기 */
// function Body(){
//     const [text, setText] = useState("");
//     const handleOnChange = (e) =>{
//         setText(e.target.value);
//     }
//     return(
//         <div>
//             <input value={text} onChange={handleOnChange} />
//             <div>{text}</div>
//         </div>
//     )
// }

/* 날짜 형식 */
// function Body(){
//     const [date, setDate] = useState("");
//     const handleOnChange = (e) =>{
//         console.log( "변경된 값 : ", e.target.value);
//         setDate(e.target.value)
//     }

//     return (
//         <div>
//             <input type="date" value={date} onChange={handleOnChange} />
//         </div>
//     )
// }

/* 드롭다운 상자 */

// function Body(){
//     const [select, setSelct] = useState("")
//     const handleOnChange = (e) =>{
//         console.log("변경된 값 : ", e.target.value);
//         setSelct(e.target.value)
//     }
//     return (
//         <div>
//             <select value={select} onChange={handleOnChange}>
//                 <option key={"1번"}>1번</option>
//                 <option key={"2번"}>2번</option>
//                 <option key={"3번"}>3번</option>
//             </select>
                
//         </div>
//     )
// }

/* 객체 자료형 이용 */
// function Body(){
//     const [state, setState] = useState({ //총 4개의 프로퍼티
//         name: "",
//         gender:"",
//         birth: "",
//         bio: "",
//     })

//     const handleOnChange = (e) =>{
//         console.log("현재 수정 대상 : ", e.target.name);
//         console.log("수정값:", e.target.value);
//         setState({
//             ...state,
//             [e.target.name]:e.target.value,
//         })
//     }

//     return(
//         <div>
//             <div>
//             <input name="name" type="text" value={state.name} placeholder="이름" onChange={handleOnChange} />
//             </div>
//             <div>
//             <select name="gender" value={state.gender} onChange={handleOnChange} >
//                 <option key={""}></option>
//                 <option key={"남성"}>남성</option>
//                 <option key={"여성"}>여성</option>
//             </select>
//             </div>
//             <div>
//                 <input name="birth" type="date" value={state.birth} onChange={handleOnChange}/>
//             </div>
//             <div>
//                 <input name="bio" type="textarea" value={state.bio} onChange={handleOnChange} />
//             </div>

//         </div>
//     )
// }

/* Props와 state */
/* 부모 컴포넌트가 자식에게 State를 Props로 전달 */
// function Viewer({number1}){
//     return <div>{number1 % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
// }
// function Body(){
//     const [number, setNumber] = useState(0);
//     const onIncrease = ()=>{
//         setNumber(number+1);
//     }
//     const onDecrease = ()=>{
//         setNumber(number-1);
//     }
//     return (
//         <div>
//             <h2>{number}</h2>
//             <Viewer number1={number} />
//             <div><button onClick={onIncrease}>+</button></div>
//             <div><button onClick={onDecrease}>-</button></div>
//         </div>
//     )
// }
/* 부모 컴포넌트가 자식에게 State를 Props로 전달하지 않음 */
function Viewer(){ //자식 컴포넌트가 Props를 받지 않음
    console.log("viewer component update!")//리렌더 된다면 콘솔 로그 뜸
    return <div>Viewer</div>;
}
function Body(){
    const [number, setNumber] = useState(0);
    const onIncrease = ()=>{
        setNumber(number+1);
    }
    const onDecrease = ()=>{
        setNumber(number-1);
    }
    return (
        <div>
            <h2>{number}</h2>
            <Viewer  /> 
            <div><button onClick={onIncrease}>+</button></div>
            <div><button onClick={onDecrease}>-</button></div>
        </div>
    )
}
export default Body