// import axios from 'axios'
import {getNewStr} from '@/assets/js/public'
export function login(userInfo) {
  return axios({
    url: getNewStr+'/UserInfo/Login',
    method: 'post',
    data: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

