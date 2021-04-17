import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialToTravels = {
    'Asia' : [
        {
            id: '',
            country: '',
            visited: false
        }
    ],
    'Europe' : [
        {
            id: '',
            country: '',
            visited: false
        }
    ],
    'North America' : [
        {
            id: '',
            country: '',
            visited: false
        }
    ],
    'South America' : [
        {
            id: '',
            country: '',
            visited: false
        }
    ],
    'Africa' : [
        {
            id: '',
            country: '',
            visited: false
        }
    ]
}

function todoReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.totravel);
        case 'REMOVE':
            return state.filter(totravel => totravel.id !== action.id);
        default:
            throw new Error(`unhandled action type : ${action.type}`);
    }
}

const TotravelStateContext = createContext();
const TotravelDispatchContext = createContext();
const TotravelNextIdContext = createContext();

export function TotravelProvider ({ children }) {
    const [selectedCountries, dispatch] = useReducer(todoReducer, initialToTravels);
    const nextId = useRef({
        'Asia' : 1,
        'Europe' : 1,
        'North America' : 1,
        'South America' : 1,
        'Africa' : 1
    });
    return (
        <TotravelStateContext.Provider value={selectedCountries}>
            <TotravelDispatchContext.Provider value={dispatch}>
                <TotravelNextIdContext.Provider value={nextId}>
                    {children}
                </TotravelNextIdContext.Provider>
            </TotravelDispatchContext.Provider>
        </TotravelStateContext.Provider>
    );
};

export function useTotravelState() {
    const context = useContext(TotravelStateContext);
    if (!context) {
        throw new Error('Cannot find TotravelState');
    }
    return useContext(TotravelStateContext);
}

export function useTotravelDispatch() {
    const context = useContext(TotravelDispatchContext);
    if (!context) {
        throw new Error('Cannot find TotravelDispatch');
    }
    return useContext(TotravelDispatchContext);
}

export function useTotravelNextId() {
    const context = useContext(TotravelNextIdContext);
    if (!context) {
        throw new Error('Cannot find TotravelNextID');
    }
    return useContext(TotravelNextIdContext);
}