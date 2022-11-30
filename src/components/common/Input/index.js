import classNames from 'classnames';
import styles from './index.module.scss'
export default  function Input({extra,onExtraClick,className,...rest}) {
    return (
        <div className={styles.root}>
            <input type="text" className={classNames('input',className)} {...rest}/>
            {extra && <div className='extra' onClick={onExtraClick}>{extra}</div>}
        </div>
    )
}