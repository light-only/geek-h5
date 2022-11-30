import styles from './index.module.scss'
import TopBar from "@/components/common/TopBar";
export default  function Login() {
    return (
        <div className={styles.root}>
            <TopBar>登录</TopBar>
            <div className='content'>
                <h3>短信登录</h3>
                <form>
                    <div className='input-item'>
                        <input type='text'/>
                        <div className='validate'>手机验证码错误信息</div>
                    </div>
                    <div className='input-item'>
                        <input type='text'/>
                        <div className='validate'>验证码错误信息</div>
                    </div>
                </form>
                <button type='submit' className='login-btn'>登录</button>
            </div>
        </div>

    )
}