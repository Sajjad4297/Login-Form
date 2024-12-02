export default function Accept({register,errors}) {
    return (
        <div className="remmember-me-box">
            <input {...register('remmemberMe')} type="checkbox" name="remmemberMe" id="remmember-me" />
            <label htmlFor="remmember-me"> قوانین را می پذیرم </label>
            <label htmlFor="remmember-me" className="error" > {errors.remmemberMe?.message} </label>
        </div>

    )
}
