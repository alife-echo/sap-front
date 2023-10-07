
import axios from 'axios';
import qs from 'qs';

export const Request = async (method:string, endPoint:string, object?:any ,token?:string | null) => {
  let data = qs.stringify(object);
  let config 
  if(method === 'post' || method === 'POST'){
    config = {
      method:method,
      maxBodyLength: Infinity,
      url: `http://localhost:4000/${endPoint}`,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };
  }
  else{
    config = {
      method:method,
      maxBodyLength: Infinity,
      url: `http://localhost:4000/${endPoint}`,
      withCredentials: true,
      headers: {
        'Authorization': `Bearer ${token}`
      },
      data: data,
    };
  }
   
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
