import React from 'react';
import TotravelItem from './TotravelItem';
import styled from 'styled-components';

const TotravelListBlock = styled.div`
    width: 100%;
    height: auto;
    background: rgb(129, 130, 133);
    opacity: 1;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin-top: 10px;
    padding: 2px;
    display: inline-block;
`;

const TotravelList = ( { totravel, selectedCountry, setSelectedCountry } ) => {

    return (
        <TotravelListBlock>
            {totravel.id !== 0 && totravel.map(totravel => (
                <TotravelItem 
                    id={totravel.id}
                    continent={totravel.continent}
                    country={totravel.country}
                    visited={totravel.visited}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                />
                ))
            }
        </TotravelListBlock>
    );
};

export default TotravelList;