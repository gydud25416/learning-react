import Header from '../component/Header'
import Button from '../component/Button'
import DiaryList from '../component/DiaryList'
import { useState, useContext, useEffect } from 'react'
import { getMonthRangeByDate, setPageTitle } from '../util'
import { DiaryStateContext } from '../App'

const Home = ()=>{
    const data = useContext(DiaryStateContext);
    const [pivoDate, setPivoDate] = useState(new Date());
    const [filteredData, setFilteredData] = useState([]);

    const headerTitle = `${pivoDate.getFullYear()}년
                        ${pivoDate.getMonth() +1}월`
    const onIncreaseMonth = ()=>{
        setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() + 1));
    }
    const onDecreaseMonth = ()=>{
        setPivoDate(new Date(pivoDate.getFullYear(), pivoDate.getMonth() - 1));
    }

    useEffect(()=>{
        if(data.length >= 1){
            const {beginTimeStamp, endTimeStamp} = getMonthRangeByDate(pivoDate);
            setFilteredData(
                data.filter(
                    (it)=>beginTimeStamp <= it.date && it.date <= endTimeStamp
                )
            )
        } else{
            setFilteredData([]);
        }
    }, [data, pivoDate]);

    useEffect(()=>{
        setPageTitle("hy의 감정 일기장")
    })

    return(
        <div>
            <Header 
            title={headerTitle}
            leftChild={<Button text={"<"} onClick={onDecreaseMonth}/>}
            rightChild={<Button text={">"} onClick={onIncreaseMonth}/>}
            /> 
            <DiaryList data={filteredData}/>
        </div>
    )
}
export default Home;