import first from './first'
import second from './second'
export default {
  install (Vue) {
    Vue.component('first', first)
    Vue.component('second', second)
  }
}
