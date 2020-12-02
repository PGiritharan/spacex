import {setLandStatus,setLaunchStatus,setLaunchYear} from '../../../redux/actions/filterActions';

test('should setup land status action object',()=>{
    const action = setLandStatus('false');
    expect(action).toEqual({
        type: "SET_LAND_STATUS",
        isLandedSuccessfully:"false"
    });
});

test('should setup launch status action object',()=>{
    const action = setLaunchStatus('true');
    expect(action).toEqual({
        type: "SET_LAUNCH_STATUS",
        isLaunchedSuccessfully:"true"
    });
});

test('should setup launch year action object',()=>{
    const action = setLaunchYear('2020');
    expect(action).toEqual({
        type: "SET_LAUNCH_YEAR",
        launchYear:"2020"
    });
});