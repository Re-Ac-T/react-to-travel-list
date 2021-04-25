import React from 'react';
import styled, { css } from 'styled-components';
import { MdDelete } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import { useTotravelDispatch } from '../TotravelContext';

const Remove = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    &:hover {
        color: #ff6b6b;
    }
`;

const TotravelItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2px 10px 2px 10px;
    cursor: pointer;
    ${props => 
      props.visited &&
      css`
        color: green
      `
    }
`;

const Text = styled.div`
    flex: 1;
    font-size: 20px;
    color: white;
    ${props =>
      props.visited &&
      css`
        color: green;
      `
    }
`;

const TotravelItem = ( { id, continent, country, visited } ) => {
    const dispatch = useTotravelDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', 
        totravel: {
            id: id,
            continent: continent,
            country: country,
            visited: visited
        }
    });
    const onRemove = () => {
        dispatch({ type: 'REMOVE', 
            totravel: {
                id: id,
                continent: continent,
                country: country,
                visited: visited
            }
        });
    }   

    return (
        <div>
            <TotravelItemBlock>
                <CheckCircle visited={visited} onClick={onToggle}>
                    {visited && <FaPaperPlane/>}
                </CheckCircle>
                <Text visited={visited}>{country}</Text>
                <Remove onClick={onRemove}>
                    <MdDelete />
                </Remove>
            </TotravelItemBlock>
        </div>
    );
};

export default TotravelItem;