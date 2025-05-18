import api from "../confing/api"

const Sendotp=async (mobile) =>{
      try {
        const response = await api.post("auth/send-otp" ,{mobile})
        return {response}
        
    } catch (error) {
        return{error}
        
    }
}
  
export {Sendotp}