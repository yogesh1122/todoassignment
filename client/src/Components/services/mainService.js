import http from "./httpService";
import { baseUrl } from "../Config.json";

export const getEnquiries = async()=>{
  let { data } = await http.get(baseUrl + "user/");
  return data;
}
 

 