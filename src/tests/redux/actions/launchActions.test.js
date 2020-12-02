import {setLaunchDetails} from '../../../redux/actions/launchActions';

test('should setup lauch details action objects',()=>{
    const action = setLaunchDetails({flight_number:'22'});
    expect(action).toEqual({
        type:'SET_LAUNCH_DETAILS',
        launchDetails: {flight_number:"22"}
    })
})