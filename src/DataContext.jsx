import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialState = [
    {
        id: 1,
        code: 'as',
        title: '한국여행',
        startDate: '1997-03-19',
        endDate: '2021-04-10'
    },
    {
        id: 2,
        code: 'eu',
        title: '유럽여행',
        startDate: '2019-07-08',
        endDate: '2019-08-02'
    },
    {
        id: 3,
        code: 'eu',
        title: '런던여행',        
        startDate: '2019-07-08',
        endDate: '2019-07-13'
    },
];

function planReducer(state, action){
    switch (action.type){
        case 'CREATE_PLAN':
            return state.concat(action.data);
        case 'DELETE_PLAN':
            return state.filter(data=>data.id !== action.id);
        default:
            return state;
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();


export function PlanProvider({children}){

    const [state, dispatch] = useReducer(planReducer, initialState);
    const nextId = useRef(4);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                        {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context) throw new Error('Cannot find TodoProvider');
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context) throw new Error('Cannot find TodoProvider');
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context) throw new Error('Cannot find TodoProvider');
    return context;
}