//SET_LAUNCH_YEAR
export const setLaunchYear=(launchYear) => ({
    type: 'SET_LAUNCH_YEAR',
    launchYear
});

//SET_LAUNCH_STATUS
export const setLaunchStatus=(isLaunchedSuccessfully) => ({
    type: 'SET_LAUNCH_STATUS',
    isLaunchedSuccessfully
});

//SET_LAND_STATUS
export const setLandStatus=(isLandedSuccessfully) => ({
    type: 'SET_LAND_STATUS',
    isLandedSuccessfully
});
