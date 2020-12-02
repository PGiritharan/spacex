import filterReducer from '../../../redux/reducer/filterReducer';

test('should setup default filter values',()=>{
    const state = filterReducer(undefined,{ type: '@@INIT'});
    expect(state).toEqual({
        launchYear:'',
        isLaunchedSuccessfully:'',
        isLandedSuccessfully:''
    });
});

test('should setup launch year filter values',()=>{
    const state = filterReducer(undefined,{ type: 'SET_LAUNCH_YEAR',launchYear:'2020'});
    expect(state).toEqual({
        launchYear:'2020',
        isLaunchedSuccessfully:'',
        isLandedSuccessfully:''
    });
});

test('should setup launch status filter values',()=>{
    const state = filterReducer(undefined,{ type: 'SET_LAUNCH_STATUS',isLaunchedSuccessfully:'true'});
    expect(state).toEqual({
        launchYear:'',
        isLaunchedSuccessfully:'true',
        isLandedSuccessfully:''
    });
});

test('should setup land status filter values',()=>{
    const state = filterReducer(undefined,{ type: 'SET_LAND_STATUS',isLandedSuccessfully:'false'});
    expect(state).toEqual({
        launchYear:'',
        isLaunchedSuccessfully:'',
        isLandedSuccessfully:'false'
    });
});