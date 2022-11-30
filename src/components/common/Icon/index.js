/**
 * 封装Icon图标通用组件
 * @param type 图标名称
 * @param className 图标样式
 * @returns {JSX.Element}
 * @constructor
 */
import classnames from 'classnames'
//prop-types 是react自带的库，不需要单独安装
import PropTypes from 'prop-types'
function Icon({ type ,className,...rest}) {
    return (
            <svg
                {...rest}
                className = {classnames('icon',className)}
                className="icon"
                aria-hidden="true"
            >
                <use xlinkHref={`#icon-${type}`}></use>
            </svg>
    )
}
//限定组件属性的数据类型
Icon.propTypes = {
    type:PropTypes.string.isRequired
}

export default Icon