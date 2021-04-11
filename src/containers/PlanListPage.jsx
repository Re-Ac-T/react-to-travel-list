import React from 'react';
import styled from 'styled-components';
import PlanBlock from '../components/PlanBlock';

import { ImCancelCircle } from "react-icons/im";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useSelector } from 'react-redux';

const PlanListBlock = styled.section`
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

const PlanListPage = ({ locationCode, locationName, setplanListPage })=>{

    const plans = useSelector((state)=>state.planData);

    const onClickExit = ()=>{
        setplanListPage({
            state: false, 
            locationCode: '', 
            locationName: ''
        });
    }

    return(
        <PlanListBlock>
            <div>
                <HiOutlineLocationMarker className="locationIcon"/> 
                {locationName}
                <HiOutlinePlusCircle />
                <ImCancelCircle onClick={onClickExit}/>
            </div>
            {plans.map((plan, idx)=>
                plan.code === locationCode && <PlanBlock data={plan} key={idx}/>
            )}
        </PlanListBlock>
    );
}

export default PlanListPage; 