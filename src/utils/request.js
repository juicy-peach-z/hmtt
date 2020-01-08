import axios from 'axios'
import JSONBIG from 'json-bigint'
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
request.defaults.transformResponse = [function (data) {
  try {
    return JSONBIG.parse(data)
  } catch (error) {
    return {}
  }
  // return data ? JSONBIG.parse(data) : {}
}]
export default request
