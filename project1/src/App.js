import './App.css';
import Viewer from './component/Viewer'
import Controller from './component/Controller'
import Even from './component/Even'
import { useRef, useEffect, useState } from 'react';  //useRef 리액트 라이브러리에서 불러오기

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleOnClick = (value)=>{
    setCount(count + value)
};
  const handleChangText = (e) =>{
    setText(e.target.value);
  }

                                    
  
/* 라이프사이클 제어하기 */
const didMountRef = useRef(false); //App 컴포넌트 페이지를 마운트했는지 판단하는 변수 didMountRef를 Ref 객채로 생성
useEffect(()=>{
  if(!didMountRef.current){ //마운트 시점에는 콘솔에 문자열을 출력하지 않도록 조건문을 추가한다.
    didMountRef.current = true;
    return;
  }else{
  console.log("컴포넌트 업데이트");
}
});  

useEffect(()=>{ //의존성 배열에 빈 배열을 전달하면 컴포넌트 마운트 시점에만 콜백 함수를 실행
  console.log("컴포넌트 마운트")
}, [])

// useEffect(()=>{
//   const intervalID = setInterval(()=>{ //함수 setInterval은 새 인터벌을 생성하면 인터벌 식별자(id)를 반환한다. 이 변수를 intervalID에 저장한다.
//     console.log("깜빡");
//   }, 1000);

//   return ()=>{ //useEffect에 인수로 전달한 콜백 함수가 새 함수를 반환하도록 한다. 이 함수는 클린업 함수로서 useEffect의 콜백 함수가 실행되기 전이나 컴포넌트가 언마운트 하는 시점에 실행된다.
//     console.log("클린업");
//     clearInterval(intervalID);//클린업 함수는 clearInterval을 호출한다. 인수로 intervalID에 생성한 인터벌 식별자를 전달해 앞서 생성한 인터벌을 삭제한다.
//   }
// })



  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller handleOnClick={handleOnClick} />
      </section>
    </div>
  );
}

export default App;
