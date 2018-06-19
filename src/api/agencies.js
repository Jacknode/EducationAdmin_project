/**
 * Created by leibo on 18/6/6.
 */
import axios from 'axios'

//初始化供应商信息
export function adminSupplier(data) {
  return axios({
    url: 'http://192.168.3.4/AgentInfo/Select',
    method: 'post',
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
