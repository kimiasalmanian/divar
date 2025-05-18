import React from 'react'
import { Sendotp } from '../../services/auth';

function SendOtpForm({ setstep , mobile , setmobile }) {

    const Submithandler = async (event) =>{
        event.preventDefault();
       
        if (mobile.length !== 11) return;
        const {response , error} = await Sendotp(mobile) 
        console.log({response , error})
        if (response) setstep(2)
        if(error) console.log(error.response.data.message)
    }
  return (
<form onSubmit={Submithandler}>

<p>ورود به حساب کاربری</p>
<span>برای استفاده از امکانات دیوار, لطفا شماره موبایل خود را وارد کنید.کد تایید به این شماره پیامک خواهد شد</span>
<label htmlFor="input">شماره موبایل خود را وارد کنید </label>
<input type="text" 
 id="input"
 placeholder="شماره موبایل"
 value={mobile}
 onChange={(e) => setmobile(e.target.value)} />
 <button type="submit">ارسال کد تایید</button>



</form>
  )
}

export default SendOtpForm