import request from "@/utils/request";

/**
 * 获取验证码接口
 */
export const sendCode = (mobile)=>{
    return (dispatch)=>{
        //发送请求
        const res = request({
            url:'/sms/codes/' +mobile,
            method:'get'
        })
    }
}