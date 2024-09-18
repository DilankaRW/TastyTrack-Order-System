import { type } from "@testing-library/user-event/dist/type"
import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./Reducer"
import axios from "axios"
import { API_URL } from "../../config/api"

export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try{
        const {data}=await axios.post(`${API_URL}/auth/signup`,reqData.userData)
        if (data.jwt)localStorage.setItem("jwt",data.jwt);
        if(data.role==="ROLE_RESTAURANT_OWNER"){
            reqData.navigate("/admin/restaurant")
        } else {
            reqData.navigate("/")
        }
        dispatch({type:REGISTER_SUCCESS,payload:data.jwt})
    } catch (error){
        console.log("error",error)
    }
}