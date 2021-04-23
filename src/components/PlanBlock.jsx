import React from 'react';
import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../DataContext';


const PlanBlockWrap = styled.section`
    background: #222;
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
    padding: 20px;
    box-sizing: border-box;
    cursor: pointer;
    
    .deleteIcon{
        opacity: 0;
        float: right;
        transition: opacity 0.2s;
    }

    &:hover .deleteIcon{
        opacity: 1;
    }
    h3{
        margin: 45px 0 20px;
    }
    p{
        font-size: 14px;
    }
`;

const PlanBlock = ({ data })=>{

    const dispatch = useTodoDispatch();

    const deleteList = ()=>{
        dispatch({
            type:'DELETE_PLAN',
            id: data.id
        })
    }

    return(
        <PlanBlockWrap>
            <MdDelete className="deleteIcon" onClick={deleteList} />
            <h3>{data.title}</h3>
            <p>{data.startDate}~{data.endDate}</p>
        </PlanBlockWrap>
    );
}

export default PlanBlock; 