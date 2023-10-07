import axios from 'axios';
import qs from 'qs';

export const Request = async (object:any,method:string, endPoint:string, token?:string) => {
  let data = qs.stringify(object);
  let config = {
    method:method,
    maxBodyLength: Infinity,
    url: `http://localhost:4000/${endPoint}`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      ...(token && { 'Authorization': `Bearer ${token}` })
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
