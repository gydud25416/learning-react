import { useEffect } from "react"

function Even(){
    useEffect(()=>{ //useEffect를 호출하고 의존성 배열로 빈 배열을 전달. 그다음 콜백 함수가 화살표 함수를 반환한다.
        return()=>{ //컴포넌트가 다시 실행되기 전이나 언마운트 시점에 실행된다.
            console.log("Even 컴포넌트 언마운트")
        };
    }, []);

    return(
        <div>현재 카운트는 짝수입니다.</div>
    )
}
export default Even;