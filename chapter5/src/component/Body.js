
/* 매개변수에서 구조 분해 할당 */
// function Body({name, location, favorList}){
 
//     console.log(name, location, favorList);
//     return (
//         <div className="body">
//             {name}은 {location}에 거주합니다.
//             <br />
//             {favorList.length}개의 음식을 좋아합니다.
//         </div>
//     )
// }

// Body.defaultProps = { 배열 수가 0개일 때를 대비
//     favorList: [],
// };

/* props로 컴포넌트 전달 */
function Body({ children }){
    console.log(children);
    return (
        <div className="body">
            {children} 
        </div>
    )
}

export default Body;