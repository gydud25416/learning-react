## State(상태)란?

- 어떤 사물의 형편이나 모양을 일컫는 말
- 전구 State는 off(소등), on(점등) 둘 중 하나의 값을 갖는다.
- 전구 State의 값이 off일 때 스위치를 켜면 값이 on으로 바뀐다.
- 전구의 상태가 상태 변화의 따라 점등 또는 소등으로 변하는 것처럼 리액트 컴포넌트 또한 State 값에 따라 다른 결과를 렌더링 한다.

### useState

- useState 문법 [ const [light(State 변수), setLight(set 함수)] = useState(’off’) (생성자(초깃값))
- 배열의 첫번째 요소 ‘light’는 현재 상태의 값을 저장하는 변수 → **State 변수**
- 배열의 두번째 요소 ‘setLight’는 State 변수의 값을 변경하는, 즉 상태를 업데이트 하는 함수 → **set 함수**
- useState를 호출할 때 인수로 값을 전달하면 이 값이 State의 초깃값이 된다.
- 위 코드에서는 ‘off’를 전달하여 State 변수 light의 초깃값은 off가 된다.

```jsx
import {useState} from "react" //리액트가 제공하는 State를 만드는 함수

function Body(){
    const [count, setCount] = useState(0)
    return(
        <div class="body">
            <h2>{count}</h2>
        </div>
    )
}

export default Body
```

## set 함수로 State 값 변경하기

```jsx
import {useState} from "react"

function Body(){
    const [count, setCount] = useState(0)

    const onIncrease = () =>{
        setCount(count+1);
    }
    return(
        <div class="body">
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
        </div>
    )
}

export default Body
```

- 버튼을 클릭하면 onIncrease 이벤트 핸들러 실행
- 함수 onIncrease를 setCount를 호출
- 인수로 현재의 count값에 1 더한 값을 전달
- 컴포넌트는 자신이 관리하는 State 값이 변하면 다시 호출된다. 그리고 변경된 State 값을 페이지에 렌더링 한다.
State 값이 변해 컴포넌트를 다시 렌더링하는 것을 ‘리렌더’ 또는 ‘리렌더링’이라고 한다.
리액트 컴포넌트는 자신이 관리하는 State 값이 변하면 자동으로 리렌더된다.

## State로 사용자 입력 관리

### 입력 하기

```jsx
function Body(){
    const [text, setText] = useState("");
    const handleOnChange = (e) =>{
        setText(e.target.value);
    }
    return(
        <div>
            <input onChange={handleOnChange} />
            <div>{text}</div>
        </div>
    )
}

export default Body
```

- 입력 폼에 텍스트를 입력하면 onChange 이벤트가 발생해 이벤트 핸들러 handleOnChange가 호출
- 이벤트 핸들러 내부에서 set 함수를 호출하고 인수로 현재 사용자가 입력한 텍스트를 전달
- 그 결과 사용자가 입력한 값은 text에 저장되면서 State 값을 업데이트 함
State 값이 변경되면 컴포넌트는 자동으로 리렌더

## 날짜 입력 하기

```jsx
function Body(){
    const [date, setDate] = useState("");
    const handleOnChange = (e) =>{
        console.log( "변경된 값 : ", e.target.value);
        setDate(e.target.value)
    }

    return (
        <div>
            <input type="date" value={date} onChange={handleOnChange} />
        </div>
    )
}
```

- 2024-02-25 처럼 날짜 형식으로도 State 값 저장 가능

## 드롭다운 상자

```jsx
function Body(){
    const [select, setSelct] = useState("")
    const handleOnChange = (e) =>{
        console.log("변경된 값 : ", e.target.value);
        setSelct(e.target.value)
    }
    return (
        <div>
            <select value={select} onChange={handleOnChange}>
                <option key={"1번"}>1번</option>
                <option key={"2번"}>2번</option>
                <option key={"3번"}>3번</option>
            </select>
                
        </div>
    )
}
export default Body
```

- 드롭다운 옵션을 변경하면 onChange 이벤트가 발상
- 이때 이벤트 핸들러에 제공되는 이밴트 객체 e.target.value에는 사용자가 선택한 key 속성이 저장
- 이 값으로 State 값을 변경

## 객체 자료형을 이용하여 여러 사용자 입력 관리

```jsx
function Body(){
    const [state, setState] = useState({ //총 4개의 프로퍼티
        name: "",
        gender:"",
        birth: "",
        bio: "",
    })

    const handleOnChange = (e) =>{
        console.log("현재 수정 대상 : ", e.target.name);
        console.log("수정값:", e.target.value);
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }

    return(
        <div>
            <div>
            <input name="name" type="text" value={state.name} placeholder="이름" onChange={handleOnChange} /> //각 name 속성 추가
            </div>
            <div>
            <select name="gender" value={state.gender} onChange={handleOnChange} > //각 value 값을 state의 프로퍼티 중 하나로 설정
                <option key={""}></option>
                <option key={"남성"}>남성</option>
                <option key={"여성"}>여성</option>
            </select>
            </div>
            <div>
                <input name="birth" type="date" value={state.birth} onChange={handleOnChange}/>
            </div>
            <div>
                <input name="bio" type="textarea" value={state.bio} onChange={handleOnChange} />
            </div>

        </div>
    )
}
export default Body
```

- 각 입력폼의 name, value 속성 설정. 각 state의 프로퍼티 값을 적음
- 스프레드 연산자를 이용해 set 함수 내 state 값을 나열
- 객체의 괄호 표기법을 사용하여 입력 폼의 name 속성 (e.target.name)을 key로, 입력 폼에 입력한 값(e.target.value)을 value로 저장
키의 밸류 값을 state 변수로 적용하는 함수 완성

## Props와 State

- 동적으로 변하는 값인 리액트의 State 역시 일종의 값이므로 Props를 전달할 수 있다.

```jsx
/* 부모 컴포넌트가 자식에게 State를 Props로 전달 */
function Viewer({number1}){ //body의 자식
    return <div>{number1 % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
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
            <Viewer number1={number} /> //viewer의 프로퍼티 값은 부모에서 값(부모의 state)을 전달
            <div><button onClick={onIncrease}>+</button></div>
            <div><button onClick={onDecrease}>-</button></div>
        </div>
    )
}
export default Body
```

- 중요한 점 : 자식 컴포넌트는 Props로 전달된 State 값이 변하면 자신도 리렌더 됨
즉, 부모에 속해있는 State 값(number) 이 변하면 Viewer 컴포넌트에서 구현한 ‘짝수’, ‘홀수’ 값도 따라서 변함

```jsx
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
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/58701d18-27cd-4023-b1ba-c7ee2604b3b6/e6a50b62-1e0a-4d09-8694-28a3aa0ac0c8/Untitled.png)

- 첫 번째 출력은 Viewer 컴포넌트를 페이지에 처음 렌더링 할때 출력된 것
- 나머지 5번은 부모인 Body 컴포넌트의 State가 변할 때마다 출력
- 따라서 리액트에서는 부모 컴포넌트가 리렌더되면 자식도 함께 리렌더 됨
- 의미 없는 리렌더가 자주 발생하면 웹 브라우저의 성능은 떨어진다.
컴포넌트의 부모-자식 관계에서 State를 사용할 때는 주의가 필요하다.