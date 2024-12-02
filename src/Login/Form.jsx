import InputCountaner from "./Inputs/InputCountaner";
import { useState } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import RememberMeBox from "./Accept";
import BtnBox from "./BtnBox";
export default function Form() {
    var [rightCode ,setRightCode] = useState(' ');
    const validate = yup.object().shape({

        userName : yup.string().required('نام کاربری الزامی است'),
        password :  yup.string().required('رمز عبور الزامی است').min(8,'رمز عبور باید بیشتر از 8 حرف باشد')
        .matches(/[a-z]+/,'رمز عبور باید شامل حروف لاتین کوچک باشد')
        .matches(/[A-Z]+/,'رمز عبور باید شامل حروف لاتین بزرگ باشد')
        .matches(/\d+/,'رمز عبور باید شامل اعداد باشد').matches(/\W+/,'رمز عبور باید شمل یک کاراکتر خاص باشد'),
        code : yup.string().length(4,'کد امنیتی اشتباه است').oneOf([rightCode],'کد امنیتی اشتباه است'),
        remmemberMe : yup.bool().oneOf([true],'   *    قوانین باید پذیرفته شوند')





    })
    const  { register, handleSubmit, formState : {errors} } = useForm({resolver : yupResolver(validate)});
    function onFormSubmit(data) {}

    return (
        <form action="#" name="form" onSubmit={handleSubmit(onFormSubmit)}>
            <InputCountaner register={register} errors={errors} rightCode={rightCode} setRightCode={setRightCode} />
            <RememberMeBox register={register} errors={errors} />
            <BtnBox />
        </form>
    )
}
