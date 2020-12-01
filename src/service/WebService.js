import https from './HTTPS';

const BASE_URI = 'https://api.spaceXdata.com/v3/launches?limit=100'

class WebServices {
    static getLaunches = ({launchYear, isLaunchedSuccessfully, isLandedSuccessfully}) => {
        let uri = BASE_URI;
        if(launchYear && isLandedSuccessfully && isLaunchedSuccessfully){
            uri = BASE_URI+`&launch_success=${isLaunchedSuccessfully}&land_success=${isLaunchedSuccessfully}&launch_year=${launchYear}`;
        }else if(isLaunchedSuccessfully && isLandedSuccessfully){
            uri = BASE_URI+`&launch_success=${isLaunchedSuccessfully}&land_success=${isLaunchedSuccessfully}`;
        }else if(isLaunchedSuccessfully){
            uri = BASE_URI+`&launch_success=${isLaunchedSuccessfully}`;
        }else if(isLandedSuccessfully){
            uri = BASE_URI+`&land_success=${isLaunchedSuccessfully}`;
        }else if(launchYear){
            uri = BASE_URI+`&launch_year=${launchYear}`;
        }
        return new Promise((resolve,reject)=>{
            https.get(uri).then((response) => {
                return resolve(response);
            }).catch((err)=>{
                return reject(err);
            })
        });

    }
}

export default WebServices;
