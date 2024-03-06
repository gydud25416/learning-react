
import { useRef, useState } from 'react';
import './TodoEditor.css'
const TodoEditor = ({onCreate})=>{
    const [content, setContent] = useState("")
    const inputRef = useRef();
    const handleChange = (e)=>{
        setContent(e.target.value)
    }
    const onKeyDown= (e)=>{
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    const onSubmit = ()=>{
        if(!content){
            alert("내용을 입력해주세요.")
            inputRef.current.focus();
            return
        }
        onCreate(content)
        setContent("")
    }
    return(
        <div className='TodoEditor'>
            <h4>새로운 Todo 작성하기 🖋️</h4>
            <div className='editor_wrapper'>
                <input ref={inputRef} onChange={handleChange} onKeyDown={onKeyDown} value={content} placeholder='새로운 Todo...' />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    )
}
export default TodoEditor;