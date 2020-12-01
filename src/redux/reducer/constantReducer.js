const constantDefaultReducerState = {
    yearRange: 14,
    getLaunchYearFilterButtons: function (){
        const $this = this;
        let yearDetails = [];
        const currentYear = new Date().getFullYear();
        for(let i =currentYear-$this.yearRange; i<=currentYear; i++){
            yearDetails.push(i);
        }
        return yearDetails;
    } 
}

const constantReducer = (state=constantDefaultReducerState, action) => {
    switch (action.type){
        case "SET_YEAR_RANGE":
            return {
                ...state,
                yearRange: action.yearRange
            };
        default:
            return state;
    }
}

export default constantReducer;
