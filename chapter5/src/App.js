 
import './App.css';
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

/* 따로 파일 생성 없이 컴포넌트 */
// function Header(){
//   return (
//       <header>
//           <h1>header</h1>
//       </header>
//   )
// }
 
/* 스프레드 연산자로 여러개 값 전달 */
// function App() {
//   const BodyProps = {
//     name : "이정환",
//     location:"부천시",
//     favorList :["파스타", "빵", "떡볶이"]
//   }
//   return (
//   <div className="App">
//     <Header />
//     <Body {...BodyProps}/>
//     <Footer />
//   </div>
//   );
// }

/* props로 컴포넌트 전달 */

function ChildComp(){
  return(
    <div>
      child component
    </div>
  )
}
function App(){
  return(
    <div className='App'>
        <Header />
        <Body>
          <ChildComp />
        </Body>
        <Footer />
    </div>
  )
}

export default App;
