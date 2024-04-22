 
import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import React, { useReducer, useRef, useEffect, useState, createContext } from 'react';
import { log } from 'async';

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function reducer(state, action){
  switch (action.type){
    case "CREATE" :{
      const newState = [action.data, ...state];
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState;
    }
    case "UPDATE" :{
      const newState = state.map((it)=> 
      String(it.id) === String(action.data.id) ? {...action.data} : it
     )
     localStorage.setItem("diary", JSON.stringify(newState));
      return newState
    }
    case "DELETE":{
      const newState = state.filter((it)=> String(it.id) !== String(action.data.id));
      localStorage.setItem("diary", JSON.stringify(newState));
      return newState 
    }
    case "INIT":{
      return action.data;
    }
    default :{
      return state;
    }
  } 
}
 
const mockData = [
  {
    id:"mock1",
    date:new Date().getTime() - 1,
    content:"mock1",
    emotionId:1,
  },
  {
    id:"mock2",
    date:new Date().getTime() - 2,
    content:"mock2",
    emotionId:2,
  },
  {
    id:"mock3",
    date:new Date().getTime() - 3,
    content:"mock3",
    emotionId:3,
  },
]

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer,[]);
  const idRef = useRef(0); 

  useEffect(()=>{
    const rawData = localStorage.getItem("diary");
    if(!rawData){
      setIsDataLoaded(true);
      return;
    }
    const localData = JSON.parse(rawData);
    if(localData.length === 0 ){
      setIsDataLoaded(true);
      return;
    }
  }, []);

  const onCreate = (date, content, emotionId)=>{
    dispatch({
      type:"CREATE",
      data:{
        id: idRef.current,
        date:new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current ++;
  }

  const onUpdate = (targetId, date, content, emotionId)=>{
    dispatch({
      type:"UPDATE",
      data:{
        id:targetId,
        date:new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  }

  const onDelete = (targetId )=>{
    dispatch({
      type:"DELETE",
      data:{id:targetId},
    })
  }

  if (!isDataLoaded){
    return <div>데이터를 불러오는 중입니다.</div>;
  } else{
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value = { {onCreate, onUpdate, onDelete } }>
          <div className="App">
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='/new' element={<New/>} />
                  <Route path='/diary/:id' element={<Diary/>} />
                  <Route path='/edit/:id' element={<Edit/>} /> 
              </Routes>
              
            </div>
        </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
  } 
}
export default App;
