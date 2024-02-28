import { useRef, useState } from "react"

/* useRef 입력 */
// function Body(){
//     const [text, setText] = useState("");
//     const textRef = useRef();
//     const handleOnChange = (e)=>{
//         setText(e.target.value)
//     }
//     const handleOnClick = ()=>{
//         alert(text);
//     }
//     return(
//         <div>
//             <input ref={textRef} value={text} onChange={handleOnChange} />
//             <button onClick={handleOnClick}>작성 완료</button>
//         </div>
//     )
// }

/* 입력 폼 초기화하기 */
// function Body(){
//     const [text, setText] = useState("");
//     const textRef = useRef();
//     const handleOnChange = (e)=>{
//         setText(e.target.value)
//     }
//     const handleOnClick = ()=>{
//         alert(text);
//         textRef.current.value = "";
//     }
//     return(
//         <div>
//             <input ref={textRef} value={text} onChange={handleOnChange} />
//             <button onClick={handleOnClick}>작성 완료</button>
//         </div>
//     )
// }


/* useRef로 초기화하기 */
// function Body(){
//     const [text, setText] = useState("");
//     const textRef = useRef();
//     const handleOnChange = (e)=>{
//         setText(e.target.value)
//     }
//     const handleOnClick = ()=>{
//         if (text.length < 5){
//             textRef.current.focus();
//         }else{
//             alert(text);
//             setText("");
//         }
//     }
//     return(
//         <div>
//             <input ref={textRef} value={text} onChange={handleOnChange} />
//             <button onClick={handleOnClick}>작성 완료</button>
//         </div>
//     )
// }




/* 글씨 확대 만들기 */
 
import './body.css'
function Body(){
    const [text, setText] = useState("") //텍스트 상태 변경
    const [font, setFont] = useState(20) //폰트크기 상태 변경
    const textRef = useRef();
    const handleOnChange = (e)=>{ //텍스트 입력 이벤트
        setText(e.target.value) 
    } 
    const onIncrease = ()=>{ //폰트크기 클릭 이벤트
        setFont(font+3);
    }
    const onDecrease = ()=>{
        setFont(font-3);
    }
    const StyleDiv = { //인라인 스타일 프로퍼티 추가
        fontSize : font + 'px', 
    }
    const handleOnKey = (e)=>{
        if(e.keyCode === 13){
            alert(text)
            textRef.current.value = ""
        }
    }
    console.log(font + "%" )
    return (
        <div>
            <div id="tt"  style={StyleDiv}>{text}</div>
            <textarea name="text" rows="5" cols="50"   value={text} onChange={handleOnChange} onKeyDown={handleOnKey} ref={textRef} ></textarea>
            <div><button onClick={onIncrease}>글씨 키우기</button></div>
            <div><button  onClick={onDecrease}>글씨 줄이기</button></div>
        </div>
    )
}
export default Body
