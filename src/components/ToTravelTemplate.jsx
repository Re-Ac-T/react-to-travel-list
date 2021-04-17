import React from 'react';
import styled from 'styled-components';

const TotravelEntireBlock = styled.div`
    opacity: 0.7;
    position: absolute;
    top:0;
    text-align: center;
    width: 100%;
    
`;

const TotravelTemplateBlock = styled.div`
    width: 15%;
    height: 150px;
    background: rgb(129, 130, 133);
    opacity: 1;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin: 10px 5px; /* 페이지 중앙에 나타나도록 설정 */
    display: inline-block;
`;

function TotravelTemplate ({children}) {
    return (
        <TotravelEntireBlock>
            <TotravelTemplateBlock>{children}</TotravelTemplateBlock>
            <TotravelTemplateBlock>{children}</TotravelTemplateBlock>
            <TotravelTemplateBlock>{children}</TotravelTemplateBlock>
            <TotravelTemplateBlock>{children}</TotravelTemplateBlock>
            <TotravelTemplateBlock>{children}</TotravelTemplateBlock>
        </TotravelEntireBlock>
    );
};

export default TotravelTemplate;