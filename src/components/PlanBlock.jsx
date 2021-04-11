import React from 'react';
import styled from 'styled-components';

const PlanBlockWrap = styled.section`
    background: #222;
    display: inline-block;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
    padding-left: 20px;
    box-sizing: border-box;
    cursor: pointer;
`;

const PlanBlock = ({ data })=>{

    return(
        <PlanBlockWrap>
            <p>{data.title}</p>
            <p>{data.date}</p>
        </PlanBlockWrap>
    );
}

export default PlanBlock; 