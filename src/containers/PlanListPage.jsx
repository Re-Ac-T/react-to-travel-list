import React, { useState } from 'react';
import styled from 'styled-components';
import PlanBlock from '../components/PlanBlock';
import AddListPop from '../components/AddListPop';

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarPlus } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";

import { useTodoState } from '../DataContext';

const PlanListBlock = styled.section`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    color: #fff;

    .icon{
        cursor: pointer;
    }

    div{
        font-size: 30px;
        line-height: 50px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .locationIcon{
            color: #F53;
            margin-right: 10px;
        }

        .cancelIcon{
            font-size: 29px;
            margin-left: 15px;
        }
    }
`;


const PlanListPage = ({ locationCode, locationName, setplanListPage })=>{

    const [addPage, setAddPage] = useState(false);
    const plans = useTodoState();

    const onClickExit = ()=>{
        setplanListPage({
            state: false, 
            locationCode: '', 
            locationName: ''
        });
    }

    return(
        <>
            <PlanListBlock>
                <div className="popupTitle">
                    <p>
                        <HiOutlineLocationMarker className="locationIcon"/> 
                        <span>{locationName}</span>
                    </p>
                    <p>
                        <FaRegCalendarPlus className="icon" onClick={()=>{setAddPage(true)}}/>
                        <GiCancel className="cancelIcon icon" onClick={onClickExit}/>
                    </p>
                </div>
                {plans.map((plan, idx)=>
                    plan.code === locationCode && <PlanBlock data={plan} key={idx}/>
                )}
            </PlanListBlock>
            {addPage && <AddListPop setAddPage={setAddPage} locationCode={locationCode}/>}
        </>
    );
}

export default PlanListPage; 