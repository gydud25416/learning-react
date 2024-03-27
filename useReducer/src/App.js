 import Header from './component/Header'
 import TodoEditor from './component/TodoEditor';
 import TodoList from './component/TodoList';
 import { useRef, useReducer } from 'react';
import './App.css';

function reducer(state, action){

  return state
}
 
function App() {

 const [todo, dispatch] = useReducer(reducer, mockTodo)
  const idRef = useRef(3);

  const onCreate = (content) =>{ //아이템 생성
     idRef.current ++;
     
  }

  const onUpdate = (targetId) =>{ //아이템 수정
     
  }

  const onDelete = (targetId) =>{
     
  }
  return (
    <div className="App">
 
      <Header /> 
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}

export default App;
