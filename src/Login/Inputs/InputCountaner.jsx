import InputBox from "./InputBox";
import '../Login.css'
import user from "../images/user.png";
import key from "../images/key.png";
import refresh from "../images/refresh.png";
import eyeOpen from "../images/eye_open.png";
import eyeClose from "../images/eye_close.png";
import { useState } from "react";
export default function InputCountaner({register,errors,rightCode,setRightCode}){
const [isEyeClosed , setIsEyeClosed] =useState(true)




    return(
        <div className="input-container">
            <InputBox register={register} errors={errors} type="text" name="userName" id="userName" value="نام کاربری :"  forInput="userName" src={user} />
            <InputBox register={register} errors={errors} isEyeClosed={isEyeClosed} setIsEyeClosed={setIsEyeClosed} type={isEyeClosed ? "password" : "text"} name="password" id="password" value="کلمه عبور :" eyeOpen={eyeOpen} eyeClose={eyeClose} forInput="password" src={key} />
            <InputBox register={register} errors={errors} type="text" name="code" id="code" value="کد امنیتی :" forInput="code" src={refresh} isCaptcha={true} rightCode={rightCode} setRightCode={setRightCode} />
        </div>
    )
}
