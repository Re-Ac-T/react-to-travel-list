import React from 'react';
import styled from 'styled-components';

const TotravelHeadBlock = styled.div`
    color: white;
    text-align: center;
    background-color: gray;
`;

const TotravelHead = ( {continent, totravel} ) => {
    return (
        <TotravelHeadBlock>
            {totravel.length} {totravel.length === 1 ? `Country` : `Countries`} <br/>
            ({continent}) 
        </TotravelHeadBlock>
    );
};

export default TotravelHead;