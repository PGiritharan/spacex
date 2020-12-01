import axios from 'axios';

class API {
    
    get = (uri)=>{
        return  new Promise(async (resolve, reject)=>{
            return await axios.get(uri).then((response)=>{
                return resolve(response.data);
            }).catch((err)=>{
                return reject(err);
            });
        });
    };
}

export default new API();