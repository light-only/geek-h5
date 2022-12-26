import styles from './index.module.scss'
import TopBar from "@/components/common/TopBar";
import Input from '@/components/common/Input'
import { useFormik } from 'formik'
import classNames from "classnames";
import * as Yup from 'yup'
export default  function Login() {
        const formik = useFormik({
            initialValues:{
                mobile:'',
                code:''
            },
            onSubmit:(values)=>{
                console.log(values)
            },
            validationSchema:Yup.object({
                mobile:Yup.string().required('手机号不能为空').matches(/^1[3-9]\d{9}$/,'手机号格式错误'),
                code:Yup.string().required('验证码不能为空').matches(/^\d{6}$/,'验证码格式错误')
            })
        });
    const onExtraClick = ()=>{
        console.log('haha')
    }
    const {values:{mobile,code},handleChange,handleSubmit,errors,handleBlur,touched ,isValid} = formik;
    return (
        <div className={styles.root}>
            <TopBar>登录</TopBar>
            <div className='content'>
                <h3>短信登录</h3>
                <form onSubmit={handleSubmit}>
                    <div className='input-item'>
                        <Input
                            placeholder='请输入手机号'
                            name='mobile'
                            onChange={handleChange}
                            value={mobile}
                            autoComplete="off"
                            onBlur = {handleBlur}
                        ></Input>
                        {/*<div className='validate'>手机号码错误信息</div>*/}
                        {touched.mobile && errors.mobile?<div className='validate'>{errors.mobile}</div>:null}
                    </div>
                    <div className='input-item'>
                        <Input
                            placeholder='请输入验证码'
                            extra='获取验证码'
                            onExtraClick={onExtraClick}
                            onChange={handleChange}
                            autoComplete="off"
                            value={code} name="code"
                            onBlur={handleBlur}
                        ></Input>
                        {/*<div className='validate'>验证码错误信息</div>*/}
                        { touched.code && errors.code ?<div className='validate'>{errors.code}</div>:null}
                    </div>
                    <button type='submit' className={classNames('login-btn',{disabled:!isValid})} disabled={!isValid}>登录</button>
                </form>
            </div>
        </div>

    )
}