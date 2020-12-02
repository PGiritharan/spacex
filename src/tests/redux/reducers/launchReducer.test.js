import launchReducer from '../../../redux/reducer/launchReducer';

test('should setup default launch details',()=>{
    const state = launchReducer (undefined,{ type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should setup launch details',()=>{
    const state = launchReducer (undefined,{ type: 'SET_LAUNCH_DETAILS',launchDetails:[{flight_number:'32'}]});
    expect(state).toEqual([{flight_number:'32'}]);
});