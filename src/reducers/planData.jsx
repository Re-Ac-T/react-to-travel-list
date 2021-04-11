export const SET_BRANCH = 'SET_BRANCH';

export const setPageBranch = (data)=>({
    type: SET_BRANCH,
    data, 
});


const initialState = [
    {
        code: 'as',
        title: '한국여행',
        date: '1997.03.19-2021.04.10'
    },
    {
        code: 'eu',
        title: '유럽여행',
        date: '2021.01.01-2021.04.10'
    },
    {
        code: 'eu',
        title: 'LONDON',
        date: '2021.01.01-2021.04.10'
    },
]

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_BRANCH:
            return {
            };
        default:
            return state;
    }
}

export default reducer;