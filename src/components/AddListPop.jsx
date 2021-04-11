import React from 'react';
import styled from 'styled-components';

import { ImCancelCircle } from "react-icons/im";
import { HiOutlinePlusCircle } from "react-icons/hi";

const AddListPopBlock = styled.section`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    color: #fff;

    .locationIcon{
        color: #F53;
        font-size: 18px;
    }
`;

const AddListPop = ()=>{


    const onClickExit = ()=>{
    }

    return(
        <AddListPopBlock>
            <HiOutlinePlusCircle />
            <ImCancelCircle onClick={onClickExit}/>
        </AddListPopBlock>
    );
}

export default AddListPop; 