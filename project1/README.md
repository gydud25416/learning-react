## 프로젝트 준비하기

- [ ]  요구사항 분석하기
- [ ]  리액트 앱 만들기
- [ ]  UI 구현하기

---

## 🖥️ UI 구현하기

### 1. Viewer 컴포넌트 만들기

```jsx
function Viewer(){ 
    return(
        <div>
            <div>현재 카운트: </div>
            <h1>0</h1>
        </div> 
    )
} 
export default Viewer;
```

```jsx
import Viewer from './Viewer'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer />  //Viewer 컴포넌트를 App 자식 컴포넌트로 배치
      </section>
    </div>
  );
}

export default App;

```

### 2. Controller 컴포넌트 만들기

- 카운트를 늘리거나 줄이는 리모컨 컴포넌트 만들기

```jsx
const Controller = ()=>{

    return(
        <div>
            <button>1</button>
            <button>10</button>
            <button>100</button>
            <button>+100</button>
            <button>+10</button>
            <button>+1</button>
        </div>
    )
}

export default Controller
```

```jsx
import './App.css';
import Viewer from './component/Viewer'
import Controller from './component/Controller'

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller /> //Controoler 컴포넌트를 App 자식 컴포넌트로 배치
      </section>
    </div>
  );
}

export default App;
```

## 💄 컴포넌트 스타일링 하기

```jsx
.App {margin : 0 auto; width:1200px; text-align: left}
.App>h1{padding:30px 0;}

.App>section {padding:30px; background:#efefef; border-radius: 15px; margin-bottom:30px;}
.App>section div div{font-size: 24px;}
.App>section h1 {padding:10px 0; font-size: 36px;}

.App>section button{margin-right:5px; padding:5px 10px; cursor: pointer;}
```

## ✈️ 기능 구현하기

### 1. State를 이용해 카운터 기능 구현하기

> 목적은 Controller 컴포넌트에 있는 버튼을 클릭하면, Viewer 컴포넌트에 있는 카운트가 증가하거나 감소해야 한다.
> 

※ Props는 부모 자식 관계에서만 전달이 가능하다. 

Controller와 Viewer 의 부모인 App에서 state 변수, set 함수 모두를 만들고  자식 컴포넌트로 인수를 전달한다.

- App.js

```jsx
import './App.css';
import Viewer from './component/Viewer'
import Controller from './component/Controller'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleOnClick = (value)=>{
    setCount(count + value)
}
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleOnClick={handleOnClick} />
      </section>
    </div>
  );
}

export default App;

```

- Viewer.js

```jsx

function Viewer({count}){ 
    
    return(
        <div>
            <div>현재 카운트: </div>
            <h1>{count}</h1>
        </div> 
    )
} 
export default Viewer;
```

- Controller.js

```jsx
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
```

### State를 App 컴포넌트에서 만들어야 하는 이유는?

- state 값이나 set 함수는 각각 Viewer, Controller에 전달해야 한다.
만약 Viewer나 Controller 컴포넌트에 State값이나 set 함수를 넣었다면 서로 부모 자식 관계가 아니기 때문에
값과 함수를 전달할 방법이 없다.
따라서 State 값이나 set함수를 여러 컴포넌트에서 사용하는 경우, 이들을 상위 컴포넌트에서 관리한다.
리액트에서 이 기능을 다른 말로 ‘State 끌어올리기(State Lifting)’라고 한다.

### 리액트답게 설계하기

- 리액트에서 컴포넌트 간에 데이터를 전달할 때는 Props를 사용하는데, 전달 방향은 언제나 부모에서 자식으로 전달하는 방식이다.
이러한 데이터 전달 특징을 ‘단방향 데이터 흐름’이라고한다.
- 반대로 State를 변경하는 이벤트는 자식에서 부모를 향해 역방향으로 전달되어야 한다.
Controller 컴포넌트에 있는 버튼 요소를 클릭하면 App 컴포넌트의 State를 업데이트하는 이벤트가 발생한다.
