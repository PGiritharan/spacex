const filterDefaultReducerState = {
    launchYear:'',
    isLaunchedSuccessfully:'',
    isLandedSuccessfully:''
}

const filterReducer = (state=filterDefaultReducerState,action)=>{
    switch (action.type){
        case "SET_LAUNCH_YEAR":
            return {
                ...state,
                launchYear: action.launchYear
            }
        case "SET_LAUNCH_STATUS":
            return {
                ...state,
                isLaunchedSuccessfully: action.isLaunchedSuccessfully
            }
        case "SET_LAND_STATUS":
            return {
                ...state,
                isLandedSuccessfully: action.isLandedSuccessfully
            }
        default:
            return state;
    }
}

export default filterReducer;