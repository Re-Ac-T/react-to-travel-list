import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialToTravels = {
    'Asia' : [],
    'Europe' : [],
    'North America' : [],
    'South America' : [],
    'Africa' : [],
    'Oceania' : [],
    'Antarctica' : []
}

function todoReducer(selectedCountries, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...selectedCountries,
                [action.totravel.continent] : [
                    ...selectedCountries[action.totravel.continent],
                    action.totravel
                ]
            }
        case 'REMOVE':
            var arr1 = selectedCountries[action.totravel.continent].filter(a => a.country !== action.totravel.country);
            return {
                ...selectedCountries,
                [action.totravel.continent] : arr1
            }
        case 'TOGGLE':
            var arr2 = selectedCountries[action.totravel.continent].map(a => a.country === action.totravel.country ? {...a, visited : !a.visited} : a);
            return {
                ...selectedCountries,
                [action.totravel.continent] : arr2
            }
        default:
            throw new Error(`unhandled action type : ${action.type}`);
    }
}

const TotravelStateContext = createContext();
const CountryListContext = createContext();
const TotravelDispatchContext = createContext();
const TotravelNextIdContext = createContext();

export function TotravelProvider ({ children }) {
    const [selectedCountries, dispatch] = useReducer(todoReducer, initialToTravels);
    const countryList = useRef([]);
    const nextId = useRef({
        'Asia' : 1,
        'Europe' : 1,
        'North America' : 1,
        'South America' : 1,
        'Africa' : 1,
        'Oceania' : 1,
        'Antarctica' : 1
    });
    return (
        <CountryListContext.Provider value={countryList}>
            <TotravelStateContext.Provider value={selectedCountries}>
                <TotravelDispatchContext.Provider value={dispatch}>
                    <TotravelNextIdContext.Provider value={nextId}>
                        {children}
                    </TotravelNextIdContext.Provider>
                </TotravelDispatchContext.Provider>
            </TotravelStateContext.Provider>
        </CountryListContext.Provider>
    );
};

export function useTotravelState() {
    const context = useContext(TotravelStateContext);
    if (!context) {
        throw new Error('Cannot find TotravelState');
    }
    return useContext(TotravelStateContext);
}

export function useCountryList() {
    const context = useContext(CountryListContext);
    if (!context) {
        throw new Error('Cannot find CountryList');
    }
    return useContext(CountryListContext);
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