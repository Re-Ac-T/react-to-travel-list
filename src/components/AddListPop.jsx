import React, {useState} from 'react';
import styled from 'styled-components';

import { useTodoDispatch, useTodoNextId } from '../DataContext';

const PlanPopupBlock = styled.section`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    color: #222; 
    display: flex;
    justify-content: center;
    align-items: center;

`;

const PlanPopupWrapper = styled.div`
    background: #eee;
    border-radius: 20px;
    width: 500px;
    height: 300px;
    display: flex;
    flex-direction: column;
`;

const InputArea = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        margin-left: 50px;
    }
    p+p{
        margin-top: 20px;
    }
    input[type=text]{
        width: 300px;
        line-height: 30px;
        margin-left: 20px;
        background: none;
        border: none;
        border-bottom: 1px solid #aaa;
    }
    input[type=date]{
        width: 125px;
        line-height: 30px;
        margin-left: 20px;
        background: none;
        border: none;
        border-bottom: 1px solid #aaa;
    }
    span{
        margin-left: 15px;
    }
`;

const BtnArea = styled.p`
    text-align: right;
    padding: 0 20px 10px 0;

    span.cancelBtn{
        border: 1px solid #aaa;
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }
    span.confirmBtn{
        border: 1px solid #aaa;
        border-radius: 10px;
        background: #c4c3c3;
        padding: 5px 10px;
        cursor: pointer;
    }
    span+span{
        margin-left: 10px;
    }

    .icon{
        cursor: pointer;
    }
`;

const AddListPop = ({ setAddPage })=>{

    const [inputList, setInputList] = useState({
        title:'',
        startDate:'',
        endDate:''
    });

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const titleInputChange = (e)=>{
        setInputList({
            ...inputList,
            title: e.target.value
        });
        if(e.key === 'Enter') console.log("SS")
    }

    const dateInputChange = (e, obj)=>{
        console.log(e.target.value)
        if(obj==='start') 
        setInputList({
            ...inputList,
            startDate: e.target.value,
        });
        else
        setInputList({
            ...inputList,
            endDate: e.target.value
        });
    }

    const onKeyPress = (e)=>{
        if(e.key === 'Enter') addPlanList();
    }

    const addPlanList = ()=>{
        if(!inputList.title || !inputList.startDate || !inputList.endDate){
            alert('내용을 입력하세요!');
            return;
        }
        dispatch({
            type: 'CREATE_PLAN',
            data: {
                id: nextId.current,
                code: 'eu',
                title: inputList.title,
                startDate: inputList.startDate,
                endDate: inputList.endDate
            }
        });
        setInputList({
            title:'',
            startDate:'',
            endDate:''
        });
        setAddPage(false);
    }

    return(
        <PlanPopupBlock>            
            <PlanPopupWrapper>
                <InputArea>
                    <p>
                        <label for="title">여행Title</label>
                        <input 
                            type="text"
                            id="title"
                            placeholder="한국여행" 
                            value={inputList.title} 
                            onChange={titleInputChange} 
                            onKeyPress={onKeyPress}
                        />
                    </p>
                    <p>
                        <label for="startDate">여행기간</label>
                        <input 
                            type="date"
                            id="startDate"
                            value={inputList.startDate} 
                            onChange={(e)=>{dateInputChange(e, "start")}} 
                            onKeyPress={onKeyPress}
                        />
                        <span>~</span>
                        <input 
                            type="date"
                            value={inputList.endDate} 
                            onChange={(e)=>{dateInputChange(e, "end")}} 
                            onKeyPress={onKeyPress}
                        />
                    </p>
                </InputArea>
                <BtnArea>
                    <span 
                        className="cancelBtn icon" 
                        onClick={()=>{setAddPage(false)}
                    }>
                        취소
                    </span>
                    <span 
                        className="confirmBtn icon" 
                        onClick={addPlanList}
                    >
                        확인
                    </span>
                </BtnArea>
            </PlanPopupWrapper>
        </PlanPopupBlock>
    );
}

export default AddListPop; 