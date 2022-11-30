import styles from './index.module.scss'
import TopBar from "@/components/common/TopBar";
import Input from '@/components/common/Input'
export default  function Login() {
    const onExtraClick = ()=>{
        console.log('haha')
    }
    return (
        <div className={styles.root}>
            <TopBar>登录</TopBar>
            <div className='content'>
                <h3>短信登录</h3>
                <form>
                    <div className='input-item'>
                        <Input placeholder='请输入手机号'></Input>
                        <div className='validate'>手机号码错误信息</div>
                    </div>
                    <div className='input-item'>
                        <Input placeholder='请输入验证码' extra='获取验证码' onExtraClick={onExtraClick}></Input>
                        <div className='validate'>验证码错误信息</div>
                    </div>
                </form>
                <button type='submit' className='login-btn'>登录</button>
            </div>
        </div>

    )
}