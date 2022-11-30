import Icon from "../Icon";
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
export  default function TopBar({ children ,extra ,history}) {
    const navigate = useNavigate();
    const back = ()=>{
        //返回上一页
        navigate('/login');
    }
    return (
        <div className={styles.root}>
            <div className='left'>
                <Icon className='icon' type='arrow-left' onClick={back}></Icon>
            </div>
            <div className='title'>{children}</div>
            <div className='right'>{extra}</div>
        </div>
    )
}


