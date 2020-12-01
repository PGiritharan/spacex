const launchReducerDefaultState = [];

const launchReducer =(state = launchReducerDefaultState, action)=>{
    switch (action.type){
        case 'SET_LAUNCH_DETAILS':
            return action.launchDetails;
        default:
            return state;
    }
}

export default launchReducer;