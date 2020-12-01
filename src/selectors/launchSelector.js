import WebServices from "../service/WebService";

const launchSelector = ({launchYear,isLaunchedSuccessfully,isLandedSuccessfully}) => {
    if(!launchYear && !isLaunchedSuccessfully && !isLandedSuccessfully){
        WebServices.getLaunches().then((res)=>{
            return res;
        });
    }
}

export default launchSelector;