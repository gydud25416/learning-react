 import Header from './component/Header'
 import TodoEditor from './component/TodoEditor';
 import TodoList from './component/TodoList';
 import { useRef, useReducer, useCallback } from 'react';
import './App.css';

function reducer(state, action){
  switch(action.type){
    case "CREATE":{
      return [action.newItem, ...state]
  }
    case "UPDATE":
      return state.map((it)=>
        it.id === action.targetId //key 값
        ? {
          ...it,
          isDone: !it.isDone,
        }
        : it
      )
    case "DELETE":
      return state.filter((it)=> it.id !== action.targetId);
    default:
  return state
  }
}
const mockTodo =[
  {
    id:0, 
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id:1, 
    isDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime(),
  },
  {
    id:2, 
    isDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime(),
  }
]
function App() {

 const [todo, dispatch] = useReducer(reducer, mockTodo)
  const idRef = useRef(3);

  const onCreate = (content) =>{ //아이템 생성
    dispatch({
      type: "CREATE",
      newItem:{
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      }
    })
     idRef.current ++;
     
  }

  const onUpdate = useCallback((targetId) =>{ //아이템 수정
     dispatch({
      type:"UPDATE",
      targetId, //key={it.id}
     });
  },[]);

  const onDelete = useCallback((targetId) =>{
     dispatch({
      type: "DELETE",
      targetId,
     })
  }, []);
  return (
    <div className="App">
 
      <Header /> 
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}

export default App; 
