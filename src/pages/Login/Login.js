import styles from './index.module.scss'
import TopBar from "@/components/common/TopBar";
import Input from '@/components/common/Input'
import { useFormik } from 'formik'
export default  function Login() {
        const formik = useFormik({
            initialValues:{
                mobile:'18836587032',
                code:'1234'
            },
            onSubmit:(values)=>{
                console.log(values)
            }
        });
    const onExtraClick = ()=>{
        console.log('haha')
    }
    const {values:{mobile,code},handleChange,handleSubmit} = formik;
    return (
        <div className={styles.root}>
            <TopBar>登录</TopBar>
            <div className='content'>
                <h3>短信登录</h3>
                <form onSubmit={handleSubmit}>
                    <div className='input-item'>
                        <Input placeholder='请输入手机号' name='mobile' onChange={handleChange} value={mobile} autoComplete="off"></Input>
                        {/*<div className='validate'>手机号码错误信息</div>*/}
                    </div>
                    <div className='input-item'>
                        <Input placeholder='请输入验证码' extra='获取验证码' onExtraClick={onExtraClick} onChange={handleChange} autoComplete="off" value={code} name="code"></Input>
                        {/*<div className='validate'>验证码错误信息</div>*/}
                    </div>
                    <button type='submit' className='login-btn'>登录</button>
                </form>
            </div>
        </div>

    )
}