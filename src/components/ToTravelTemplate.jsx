import React from 'react';
import styled from 'styled-components';
import { useTotravelState } from '../TotravelContext';
import TotravelHead from './TotravelHead';
import TotravelList from './TotravelList';

const TotravelEntireBlock = styled.div`
    top:0;
    text-align: center;
    width: 100%;    
`;

const TotravelContinentBlock = styled.div`
    display: inline-block;
    width: 20%;
    margin : 10px;
`;

function TotravelTemplate () {
    const totravels = useTotravelState();

    return (
        <TotravelEntireBlock>
            {Object.keys(totravels).map((continent) => (
                [<TotravelContinentBlock>
                    <TotravelHead
                        continent={continent}
                        totravel={totravels[continent]}
                    />
                    <TotravelList
                        continent={continent}
                        totravel={totravels[continent]}
                    />
                </TotravelContinentBlock>])
            )}
        </TotravelEntireBlock>
    );
};

export default TotravelTemplate;